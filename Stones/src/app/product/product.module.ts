import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BruttoPipe } from './brutto.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, BruttoPipe],
  exports: [ProductComponent]
})
export class ProductModule { }
