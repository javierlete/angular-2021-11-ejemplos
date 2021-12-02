import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculator'
})
export class MayusculatorPipe implements PipeTransform {

  transform(value: string, longitud: number = value.length): string {
    return value[0].toUpperCase() + value.substring(1, longitud);
  }

}
