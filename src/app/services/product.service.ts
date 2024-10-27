import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.interface';
import {PRODUCTS} from '../models/product.data';

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
