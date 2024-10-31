import { Component, effect, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/types';
import { IconComponent } from '../icon/icon.component';
import { IconsComponent } from '../icons/icons.component';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paths } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, RouterLink, RouterLinkActive],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  readonly cartService = inject(CartService);
  readonly productService = inject(ProductService);
  readonly router = inject(Router);

  toggleCart = output();

  cartItemsCount = this.cartService.cartItemsCount;
  isMenuOpen = signal(false);
  searchValue = '';

  readonly Category = Category;
  readonly Icons = IconsComponent;
  readonly Paths = Paths;

  constructor() {
    effect(() => {
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(event => event.urlAfterRedirects.split('/')[1] || null),
      ).subscribe(category => {
        this.productService.setSelectedCategory(category);
      });
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }
}
