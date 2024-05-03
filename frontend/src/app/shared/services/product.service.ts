import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, of } from 'rxjs';

const API_URL = 'http://localhost:8000/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'Product 1',
  //     description: 'Description 1',
  //     price: 100,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 1'
  //   },
  //   {
  //     id: '2',
  //     name: 'Product 2',
  //     description: 'Description 2',
  //     price: 200,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 2'
  //   },
  //   {
  //     id: '3',
  //     name: 'Product 3',
  //     description: 'Description 3',
  //     price: 300,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 3'
  //   },
  //   {
  //     id: '4',
  //     name: 'Product 4',
  //     description: 'Description 4',
  //     price: 400,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 4'
  //   },
  //   {
  //     id: '5',
  //     name: 'Product 5',
  //     description: 'Description 5',
  //     price: 500,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 5'
  //   }
  // ];

  // constructor() { }

  // getProducts(): Product[] {
  //   return this.products;
  // }

  // addProduct(product: Product): void {
  //   this.products.push(product);
  // }

  // getProduct(id: string): Product | null  {
  //   return this.products.find(product => product.id === id) || null;
  // }

  //  products: WritableSignal<Product[]> = signal<Product[]>([
  //   {
  //     id: crypto.randomUUID(),
  //     name: 'Product 1',
  //     description: 'Description 1',
  //     price: 100,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 1',
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     name: 'Product 2',
  //     description: 'Description 2',
  //     price: 200,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 2',
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     name: 'Product 3',
  //     description: 'Description 3',
  //     price: 300,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 3',
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     name: 'Product 4',
  //     description: 'Description 4',
  //     price: 400,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 4',
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     name: 'Product 5',
  //     description: 'Description 5',
  //     price: 500,
  //     image: 'https://via.placeholder.com/400',
  //     category: 'Category 5',
  //   },
  // ]);

  // addProduct(product: Product): void {
  //   this.products.update((products) => [...products, product]);
  // }

  productsSignal = signal<any | null>(null);

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    console.log('Fetching products');

    this.http
      .get<any>(API_URL)
      .pipe(
        retry(3),
        catchError((e) => {
          return Promise.reject(e);
        })
      )
      .subscribe((products) => {
        console.log('Products fetched', products);
        this.productsSignal.set(products);
      });
  }
}
