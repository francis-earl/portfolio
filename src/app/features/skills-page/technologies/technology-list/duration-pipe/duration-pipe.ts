import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, hasPlusYears: boolean): string {
    if (!value) {
      return '';
    }

    if (value >= 1) {
      const unit: string = 'year';
      const plus: string = hasPlusYears ? '+' : '';
      const plural: string = hasPlusYears || value > 1 ? 's' : '';
      
      return `${value}${plus} ${unit}${plural}`;
    }

    const unit: string = 'month';
    const months: number = 12 * value;
    const plural: string = months > 1 ? 's' : '';

    return `${months} ${unit}${plural}`;
  }
}
