import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultDescription'
})
export class DefaultDescriptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value || 'Ingen beskrivelse';
  }

}
