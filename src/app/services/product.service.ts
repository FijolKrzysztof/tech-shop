import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRODUCTS } from '../models/product.data';
import { Product } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly searchTerm = new BehaviorSubject<string>('');

  getFilteredProducts(): Observable<Product[]> {
    return this.searchTerm.pipe(
      map(term =>
        PRODUCTS.filter(product =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }

  setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }
}
