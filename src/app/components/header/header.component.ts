import { Component, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category.enum';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  readonly cartService = inject(CartService);
  readonly productService = inject(ProductService);

  toggleCart = output();

  cartItemsCount = this.cartService.cartItemsCount;
  isMenuOpen = signal(false);
  searchValue: string = '';
  Category = Category;

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }
}
