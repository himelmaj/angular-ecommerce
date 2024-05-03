import { Product } from './../interfaces/product';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, of } from 'rxjs';

const API_URL = 'http://localhost:8000/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productsSignal: WritableSignal<Product[]> = signal<Product[]>([]);

  constructor(private http: HttpClient) {
    console.log('ProductService created');
    this.fetchProducts();
    console.log('ProductService fetched products', this.productsSignal);
  }

  fetchProducts(): void {

    this.http
      .get<Product[]>(API_URL)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((products) => {
        this.productsSignal.set(products);
      });
  }
}
