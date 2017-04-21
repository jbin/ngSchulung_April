import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from 'app/product/product';
import { By } from '@angular/platform-browser';
import { BruttoPipe } from 'app/product/brutto.pipe';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, BruttoPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product(2, 'testing', 18, 54);
    fixture.detectChanges();
  });

  it('should create bindings', () => {
    expect(component).toBeTruthy();
    const name = fixture.debugElement.query(By.css('span'));
    expect(name.nativeElement.textContent).toContain('testing');
  });

  it('Should raise Price', () => {
    component.changePrice(55);
    expect(component.product.price).toEqual(55);
  });
});
