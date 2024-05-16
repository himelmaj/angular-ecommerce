import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductService } from '../../../../../shared/services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './createproduct.component.html',
})
export class CreateproductComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    featured: false,
    image: 'https://via.placeholder.com/400',
    category: 'unisex'
  };

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    featured: new FormControl(false),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('https://via.placeholder.com/400'),
    category: new FormControl('', Validators.required),
  });

  f = this.form.controls;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) console.log('Invalid form');

    try {
      this.productService.addProduct(this.product);
      toast.success('Product added');
    } catch (e) {
      toast.error('Error adding product');
    }
    this.router.navigate(['/products']);
  }
}
