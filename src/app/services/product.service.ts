import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRODUCTS } from '../models/product.data';
import { Product } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly searchTerm = new BehaviorSubject<string>('');
  private readonly selectedCategory = new BehaviorSubject<string | null>(null);

  getFilteredProducts(): Observable<Product[]> {
    return combineLatest([
      this.searchTerm,
      this.selectedCategory
    ]).pipe(
      map(([term, category]) =>
        PRODUCTS.filter(product => {
          const matchesSearch = product.name.toLowerCase().includes(term.toLowerCase());
          const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
          return matchesSearch && matchesCategory;
        })
      )
    );
  }

  setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }

  setSelectedCategory(category: string | null): void {
    this.selectedCategory.next(category);
  }
}
