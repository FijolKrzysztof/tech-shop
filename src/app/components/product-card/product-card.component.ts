import {Component, inject, input} from '@angular/core';
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

  product = input<Product>();
  isAdded = input<boolean>();

  private readonly cartService = inject(CartService);

  protected IconType = IconType;

  addToCart(): void {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
