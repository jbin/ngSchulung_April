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

  styleObject: any = {
    'border': 'solid 3px blue',
    padding: '5px'
  };

  constructor() { }

  ngOnInit() {
  }

  changePrice(price) {
    this.product.price = +price;
    this.priceChange.emit(this.product.price);
  }

}
