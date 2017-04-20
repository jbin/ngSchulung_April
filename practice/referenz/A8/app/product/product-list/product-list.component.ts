import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.products = this.pService.getList();
  }


}
