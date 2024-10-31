import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { IconType, Product } from '../../models/types';
import { IconComponent } from '../icon/icon.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: 'product-card.component.html',
})
export class ProductCardComponent {
  readonly cartService = inject(CartService);

  product = input<Product>();

  recentlyAdded = signal<boolean>(false);
  IconType = IconType;
  IconsComponent = IconsComponent;

  addToCart(): void {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
      this.recentlyAdded.set(true);
      setTimeout(() => this.recentlyAdded.set(false), 1500);
    }
  }
}
