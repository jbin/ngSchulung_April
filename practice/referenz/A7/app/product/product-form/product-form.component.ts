import { Product } from './../product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  @Output() productCreated = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  save(product: Product): void {
    this.productCreated.emit(product);
    alert(JSON.stringify(product));
  }

}
