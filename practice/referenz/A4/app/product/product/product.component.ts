import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  styleConfig: any = {
    'border-style': 'dashed'
  };

  formVisible: boolean = true;

  @Input() product: Product;
  @Output() productChange = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  changePrice(price: number): void {
    this.product.price = price;
    this.productChange.emit(this.product);
  }

}
