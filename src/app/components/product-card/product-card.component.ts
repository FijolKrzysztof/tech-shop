import { Component, inject, input, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.interface';
import {CartService} from '../../services/cart.service';
import {IconType} from '../../models/icon-type.enum';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'product-card.component.html',
})
export class ProductCardComponent {
  readonly cartService = inject(CartService);

  product = input<Product>();

  recentlyAdded = signal<boolean>(false);
  IconType = IconType;

  addToCart(): void {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
      this.recentlyAdded.set(true);
      setTimeout(() => this.recentlyAdded.set(false), 1500);
    }
  }
}
