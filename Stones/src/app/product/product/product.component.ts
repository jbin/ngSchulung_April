import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'app/product/product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  changePrice(price) {
    this.product.price = +price;
    this.priceChange.emit(this.product.price);
  }

}
