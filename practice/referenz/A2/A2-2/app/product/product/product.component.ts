import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() priceChange= new EventEmitter<number>();
  @Output() productChange = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  risePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
    this.productChange.emit(this.product);
  }

}
