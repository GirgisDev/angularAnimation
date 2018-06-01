import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if (!value.length) return null;
    return value.substring(0, limit || 50) + '...';
  }

}
