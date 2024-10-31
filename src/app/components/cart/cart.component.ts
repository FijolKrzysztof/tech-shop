import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconType } from '../../models/icon-type.enum';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'cart.component.html',
})
export class CartComponent {
  readonly cartService = inject(CartService);

  close = output();

  totalPrice = this.cartService.totalPrice;
  items = this.cartService.getCartItems();
  IconType = IconType;

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }
}
