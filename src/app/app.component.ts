import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';

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
  readonly productService = inject(ProductService);

  products$ = this.productService.getFilteredProducts();
  isCartOpen = false;

  onSearch(term: string): void {
    this.productService.setSearchTerm(term);
  }
}
