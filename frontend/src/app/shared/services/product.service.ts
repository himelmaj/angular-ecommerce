import { Product } from './../interfaces/product';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, of } from 'rxjs';

const API_URL = 'http://localhost:8000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsSignal = signal<any[]>([]);

  constructor(private http: HttpClient) {
    this.fetchProducts();
    console.log('products', this.productsSignal);
  }

  fetchProducts(): void {
    this.http
      .get<any[]>(API_URL)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((products) => {
        this.productsSignal.set(products);
        // console.log('products', this.productsSignal());
      });
  }

  addProduct(product: Product): void {
    this.http
      .post<Product>(API_URL, product)
      .pipe(
        retry(3),
        catchError((e) => {
          console.log('error', e);
          return Promise.reject(e);
        })
      ).subscribe((product) => {
        console.log('product', product);
      });
  }

  deleteProduct(id: number): void {
    this.http
      .delete(`${API_URL}/${id}`)
      .pipe(
        retry(3),
        catchError((e) => {
          console.log('error', e);
          return Promise.reject(e);
        })
      ).subscribe(() => {
        console.log('product deleted');
      });
  }
}
