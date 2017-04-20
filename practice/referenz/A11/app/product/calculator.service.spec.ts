import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should calculate average', inject([CalculatorService], (service: CalculatorService) => {
    const values = [7, 3, 5];
    expect(service.average(values)).toBe(5);
  }));
});
