import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string = ''): string {
    if (!value) {
      return '';
    }
    return value.charAt(0).toUpperCase()
      + value.slice(1);
  }

}
