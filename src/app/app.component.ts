import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {HeaderComponent} from './components/header/header.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {CartComponent} from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    ProductCardComponent,
    CartComponent
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {

  private readonly productService = inject(ProductService);

  protected readonly cartService = inject(CartService);
  protected readonly recentlyAddedId$ = this.cartService.getRecentlyAdded();
  protected readonly products$ = this.productService.getFilteredProducts();
  protected readonly cartItems$ = this.cartService.getCartItems();

  protected isMenuOpen = false;
  protected isCartOpen = false;

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }
}
