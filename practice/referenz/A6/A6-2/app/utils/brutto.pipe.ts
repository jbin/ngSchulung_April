import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(amount: number, tax?: number): string {
    if (!tax) {
      tax = 19;
    }
    const gross = amount * (1 + tax / 100);
    return gross.toFixed(2);
  }

}
