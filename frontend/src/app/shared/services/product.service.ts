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
    price: 0,
    description: '',
    image: '',
    category: 'unisex',
  });
  constructor(private http: HttpClient) {
    this.fetchProducts();
    console.log('products', this.productsSignal());
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
      .subscribe(() => {
        this.fetchProducts();
        console.log('product deleted');
      });
  }

  getProductById(id: number): Product | any {
    this.http.get<Product>(`${API_URL}/${id}`).subscribe({
      next: (product) => {
        this.productSignal.set(product);
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      },
    });
  }

  updateProduct(idProduct: number, product: Product): void {
    this.http
      .put<Product>(`${API_URL}/${idProduct}`, product)
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
