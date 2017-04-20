import { HttpModule } from '@angular/http';
import { ProductService } from './product.service';
import { SaveFormsGuard } from './../utils/save-forms.guard';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductMdformComponent } from './product-mdform/product-mdform.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductMdformComponent, canDeactivate: [SaveFormsGuard] },
  { path: 'products/:id', component: ProductMdformComponent }
];

@NgModule({
  imports: [
    CommonModule, UtilsModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), HttpModule
  ],
  declarations: [ProductComponent, ProductFormComponent, ProductMdformComponent, ProductListComponent],
  providers: [ProductService],
  exports: [ProductComponent, ProductFormComponent, ProductMdformComponent]
})
export class ProductModule { }
