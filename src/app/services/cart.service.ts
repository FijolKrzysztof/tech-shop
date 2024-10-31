import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly cartItemsCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.id === product.id);

      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => {
      const updatedItems = items.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return updatedItems.filter(item =>
        item.id !== productId || item.quantity > 0
      );
    });
  }
}
