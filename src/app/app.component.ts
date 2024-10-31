import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
    RouterModule,
    HeaderComponent,
    ProductCardComponent,
    CartComponent
  ],
  template: `
   <div class="min-h-screen bg-[#0a0a0a]">
     <app-header (toggleCart)="toggleCart()"></app-header>
     <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         @for (product of products$ | async; track product.id) {
           <app-product-card [product]="product"></app-product-card>
         }
       </div>
     </main>
     @if (isCartOpen()) {
       <app-cart (close)="isCartOpen.set(false)"></app-cart>
     }
   </div>
 `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly productService = inject(ProductService);

  products$ = this.productService.getFilteredProducts();
  isCartOpen = signal(false);

  toggleCart(): void {
    this.isCartOpen.update(value => !value);
  }
}
