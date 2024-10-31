import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { IconType } from '../../models/types';
import { IconsComponent } from '../icons/icons.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: 'cart.component.html',
})
export class CartComponent {
  readonly cartService = inject(CartService);

  close = output();

  items = this.cartService.getCartItems();
  IconType = IconType;
  IconsComponent = IconsComponent;

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }
}
