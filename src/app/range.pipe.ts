import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(length: number, limit?: number): number[] {
    
    if(!length)
      return [];

    const arr = [];
    for(let i =0;i<length;i++){
      arr.push(i);
    }
    return arr;
  }

}
