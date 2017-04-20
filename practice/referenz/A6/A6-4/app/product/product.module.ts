import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductMdformComponent } from './product-mdform/product-mdform.component';


@NgModule({
  imports: [
    CommonModule, UtilsModule, MaterialModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ProductComponent, ProductFormComponent, ProductMdformComponent],
  exports: [ProductComponent, ProductFormComponent, ProductMdformComponent]
})
export class ProductModule { }
