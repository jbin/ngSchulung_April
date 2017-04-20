import { ProductListComponent } from './../product-list/product-list.component';
import { Product } from './../product';
import { BruttoPipe } from './../../utils/brutto.pipe';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const product: Product = new Product(12, 'Granit', 22, 34);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, BruttoPipe],
      imports: [MaterialModule.forRoot(), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should render Heading', () => {
    const heading = fixture.debugElement.query(By.css('h3'));
    expect(component).toBeTruthy();
    expect(heading.nativeElement.textContent).toContain('Granit');
  });
});
