import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'range'
})
export class RangePipe implements PipeTransform {
    transform(value: number) {

        if (!value)
            return;
        const arr = [];
        for (let i = 0; i < value; i++) {
            arr.push(i);
        }
        return arr;
    }
}