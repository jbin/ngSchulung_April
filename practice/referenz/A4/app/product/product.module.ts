import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,UtilsModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
