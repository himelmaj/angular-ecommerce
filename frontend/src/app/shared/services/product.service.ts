import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() { }


  getProducts(): Product[] {
    return this.products;
  }


  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProduct(id: number): Product | null  {
    return this.products.find(product => product.id === id) || null;
  }
}
