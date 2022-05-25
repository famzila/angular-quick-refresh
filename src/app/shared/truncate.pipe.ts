import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string | undefined): string | undefined {
    if(text === undefined){
      return text;
    }
    return text.substring(0, 60).concat(' ...');
  }

}
