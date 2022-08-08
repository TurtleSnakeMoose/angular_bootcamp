import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertImperialToMetric'
})
export class ConvertImperialToMetricPipe implements PipeTransform {

  transform(value: number, targetUnit: string): unknown {

    switch (targetUnit) {
      case 'm':
        return value>0 ? (value??0) * 1609 * 1000 : ''
      case 'km':
        return value>0 ? (value??0) * 1609 : ''
      case 'cm':
        return value>0 ? (value??0) * 1609 * 1000 * 1000 : ''
      default:
        throw new Error(`Conversion unit "${targetUnit}" not supported.`)
    }
  }
}
