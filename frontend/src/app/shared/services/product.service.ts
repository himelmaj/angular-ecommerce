import { Product } from './../interfaces/product';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, of } from 'rxjs';
import { toast } from 'ngx-sonner';
const API_URL = 'http://localhost:8000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsSignal = signal<Product[]>([]);
  productSignal = signal<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    category: 'unisex',
  });


  constructor(private http: HttpClient) {}

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

  addProduct(product: Product): void {
    this.http
      .post<Product>(API_URL, product)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((product) => {
        this.fetchProducts();
        console.log('product added', product);
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
      )
      .subscribe((res) => {
        this.fetchProducts();
        console.log('product deleted', res);
      });
  }

  getProductById(id: number): Product | any {
    console.log('id-2', id);
    this.http
      .get<Product>(`${API_URL}/${id}`)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((product) => {
        this.productSignal.set(product);
      });
  }

  updateProduct(id: number, product: Product): void {
    this.http
      .patch<Product>(`${API_URL}/${id}`, product)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((product) => {
        this.fetchProducts();
        console.log('product updated', product);
      });
  }
}
