import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {Product} from './product';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, { provide: XHRBackend, useClass: MockBackend }],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a List of Products', inject([ProductService, XHRBackend], (service: ProductService, mockBackend) => {
    const mockResponse = [new Product(0, 'test', 1, 2), new Product(2, 'stein', 45, 20)];

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getList().subscribe(
      (products) => {
        expect(products.length).toBe(2);
        expect(products[0].name).toBe('test');
      }
    );
  }));
});
