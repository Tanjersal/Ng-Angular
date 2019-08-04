import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propname: string) {

    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resArray = [];
    for (const val of value) {
      if (val[propname] === filterString) {
        resArray.push(val);
      }
    }
    return resArray;
  }
}
