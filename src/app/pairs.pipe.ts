import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform(array:any) {
    return array.reduce((result:any, item:any, index:number) => (
      index % 2 ? result : [...result, [item, array[index + 1]]]
    ), []);
  }
}
