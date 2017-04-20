import { ProductService, MockProductService } from './../product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BruttoPipe } from './../../utils/brutto.pipe';
import { MaterialModule } from '@angular/material';
import { ProductComponent } from './../product/product.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent, BruttoPipe],
      imports: [MaterialModule.forRoot(), RouterTestingModule],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should consume Data', () => {
    fixture.autoDetectChanges(true);
    expect(component.products.length).toBeGreaterThan(0);
    expect(component.products[0].id).toBe(0);
  });
});
