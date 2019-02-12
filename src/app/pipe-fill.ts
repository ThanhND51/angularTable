import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fillter' })

export class PipeFill implements PipeTransform {
    transform(array: [], k: any): any {
        array.sort((a: any, b: any) => {
            if (a[k] < b[k]) {
                return -1;
            } else if (a[k] > b[k]) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}