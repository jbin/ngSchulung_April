import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  imports: [
    CommonModule, UtilsModule, MaterialModule, FormsModule
  ],
  declarations: [ProductComponent, ProductFormComponent],
  exports: [ProductComponent, ProductFormComponent]
})
export class ProductModule { }
