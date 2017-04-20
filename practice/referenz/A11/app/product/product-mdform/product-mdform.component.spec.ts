import { ProductService, MockProductService } from './../product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMdformComponent } from './product-mdform.component';

describe('ProductMdformComponent', () => {
  let component: ProductMdformComponent;
  let fixture: ComponentFixture<ProductMdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMdformComponent ], imports:[ReactiveFormsModule, MaterialModule.forRoot(), RouterTestingModule],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
