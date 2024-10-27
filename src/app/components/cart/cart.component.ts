import {Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItem} from '../../models/cart-item.interface';
import {IconType} from '../../models/icon-type.enum';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'cart.component.html',
})
export class CartComponent {
  items = input<CartItem[]>([]);
  totalPrice = input(0);

  close = output();
  removeItem = output<number>();

  protected readonly IconType = IconType;
}
