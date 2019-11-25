import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){ }

  transform( url: string ): any {
    
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
