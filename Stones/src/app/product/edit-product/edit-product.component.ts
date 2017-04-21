import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'app/product/product';

@Component({
  selector: 'stn-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  value: any;

  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  save(product: Product) {
    this.value = product;
    this.productCreated.emit(product);
  }

}
