import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/products.json');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`/assets/data/products.json`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/assets/data/products.json', product);
  }
}
