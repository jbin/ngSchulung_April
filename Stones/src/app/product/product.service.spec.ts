import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
    service.getList().subscribe((products) => {
      expect(products.length).toBe(2);
    }
  )}));
});
