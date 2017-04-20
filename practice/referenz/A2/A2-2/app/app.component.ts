import { Product } from './product/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  product: Product = new Product(1, 'Grabstein Marmor', 14.56, 22.45);

  onPriceChange(price: number): void {
    console.log(this.product.price);
    alert('Neuer Preis:' + price);
    this.product.price = price;
  }
}
