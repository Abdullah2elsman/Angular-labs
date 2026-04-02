import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, percentage: number = 10): number {
    if (!value) return 0;
    if (percentage <= 0) return value;

    const discountAmount = value * (percentage / 100);
    const finalPrice = value - discountAmount;

    return finalPrice;
  }
}
