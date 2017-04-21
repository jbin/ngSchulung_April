import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from "app/product/product";

@Component({
  selector: 'stn-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {

  id: FormControl = new FormControl();
  name: FormControl = new FormControl();
  price: FormControl = new FormControl();
  weight: FormControl = new FormControl();

  productForm: FormGroup;
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private builder: FormBuilder) {
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
  }

}
