import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  average(numbers: Array<number>): number {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum / numbers.length;
  }

}
