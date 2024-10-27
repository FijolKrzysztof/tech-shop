import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartItems = new BehaviorSubject<CartItem[]>([]);
  private readonly recentlyAdded = new BehaviorSubject<number | null>(null);

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getRecentlyAdded(): Observable<number | null> {
    return this.recentlyAdded.asObservable();
  }

  addToCart(product: Product): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { ...product, quantity: 1 }]);
    }

    this.recentlyAdded.next(product.id);
    setTimeout(() => this.recentlyAdded.next(null), 1500);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    this.cartItems.next(updatedItems.filter(item =>
      item.id !== productId || item.quantity > 0
    ));
  }

  getCartItemsCount(): number {
    return this.cartItems.getValue().reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.getValue().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}
