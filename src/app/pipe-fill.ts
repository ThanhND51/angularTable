import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fillter' })

export class PipeFill implements PipeTransform {
    transform(array: [], _k: any): any {
        array.sort((a: any, b: any) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}