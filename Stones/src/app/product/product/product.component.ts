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

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

}
