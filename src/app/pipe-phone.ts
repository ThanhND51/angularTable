import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'phone'})

export class PipePhone implements PipeTransform {
  transform(value: string) : string {
    let rs: string;
    rs = value.replace(/-/g, "");
    rs = '(+84)'.concat(rs);
    return rs;
  }
}