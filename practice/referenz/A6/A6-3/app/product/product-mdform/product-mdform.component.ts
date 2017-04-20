import { Product } from './../product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'stn-product-mdform',
  templateUrl: './product-mdform.component.html',
  styleUrls: ['./product-mdform.component.css']
})
export class ProductMdformComponent implements OnInit {

  id = new FormControl();
  name = new FormControl();
  price = new FormControl();
  weight = new FormControl();
  productForm: FormGroup;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(builder: FormBuilder) {
    this.productForm = builder.group({
      id : this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
   }

  ngOnInit() {
  }

  save(): void {
    this.productCreated.emit(this.productForm.value);
    alert(JSON.stringify(this.productForm.value));
  }
}
