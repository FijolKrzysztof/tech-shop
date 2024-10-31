import { Component, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/types';
import { IconComponent } from '../icon/icon.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  readonly cartService = inject(CartService);
  readonly productService = inject(ProductService);

  toggleCart = output();

  cartItemsCount = this.cartService.cartItemsCount;
  isMenuOpen = signal(false);
  searchValue = '';
  Category = Category;

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }

  protected readonly IconsComponent = IconsComponent;
}
