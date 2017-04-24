import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProductComponent } from './reactive-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService, MockProductService } from "app/product/product.service";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe('ReactiveProductComponent', () => {
  let component: ReactiveProductComponent;
  let fixture: ComponentFixture<ReactiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveProductComponent],
      providers: [{provide: ProductService, useClass: MockProductService}],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
