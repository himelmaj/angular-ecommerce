import { Component, effect } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductService } from '../../../../../shared/services/product.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productspage.component.html',
})
export class ProductspageComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {
    effect(() => {
      this.productService.fetchProducts();
    });
    this.products = this.productService.productsSignal();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    window.location.reload();
    toast.success('Product deleted');
  }

  ngOnInit(): void {
    this.products = this.productService.productsSignal();
  }
}
