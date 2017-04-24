import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product';
import { ProductService } from 'app/product/product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private pService: ProductService) {
    this.products = this.pService.getList();
  }

  ngOnInit() {
  }

}
