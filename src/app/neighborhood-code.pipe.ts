import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neighborhoodCode'
})
export class NeighborhoodCodePipe implements PipeTransform {
  transform(value: string): string {
    return value + ' -> ' + value + ' (' + value.slice(0, 2).toUpperCase() + ')';
  }

}
