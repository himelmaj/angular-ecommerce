import { Component } from '@angular/core';
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
    id: crypto.randomUUID(),
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
  };

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  f = this.form.controls;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) console.log('Invalid form');
    // console.log(this.product);
    // this.productService.addProduct(this.product);
    this.router.navigate(['/products']);
  }
  
}
