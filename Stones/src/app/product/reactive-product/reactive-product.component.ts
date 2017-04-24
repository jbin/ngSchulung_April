import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'app/product/product';
import { ProductService } from "app/product/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'stn-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {

  id: FormControl = new FormControl('', Validators.required);
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  price: FormControl = new FormControl();
  weight: FormControl = new FormControl();

  productForm: FormGroup;
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private builder: FormBuilder, private pService: ProductService, private router: Router) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
  }

  save() {
    this.productCreated.emit(this.productForm.value);
    this.pService.saveProduct(this.productForm.value);
    this.router.navigate(['products']);
  }

}
