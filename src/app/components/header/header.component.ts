import { Component, inject, OnDestroy, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/types';
import { IconComponent } from '../icon/icon.component';
import { IconsComponent } from '../icons/icons.component';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paths } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, RouterLink, RouterLinkActive],
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly cartService = inject(CartService);
  readonly productService = inject(ProductService);
  readonly router = inject(Router);

  toggleCart = output();

  private readonly destroy$ = new Subject<void>();

  cartItemsCount = this.cartService.cartItemsCount;
  isMenuOpen = signal(false);
  searchValue = '';

  readonly Category = Category;
  readonly IconsComponent = IconsComponent;
  readonly Paths = Paths;

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects.split('/')[1] || null),
      takeUntil(this.destroy$)
    ).subscribe(category => {
      this.productService.setSelectedCategory(category);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }
}
