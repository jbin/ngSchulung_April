import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMdformComponent } from './product-mdform.component';

describe('ProductMdformComponent', () => {
  let component: ProductMdformComponent;
  let fixture: ComponentFixture<ProductMdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMdformComponent ]
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
