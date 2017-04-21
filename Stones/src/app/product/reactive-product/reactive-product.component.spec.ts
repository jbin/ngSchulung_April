import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProductComponent } from './reactive-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReactiveProductComponent', () => {
  let component: ReactiveProductComponent;
  let fixture: ComponentFixture<ReactiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveProductComponent],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule]
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
