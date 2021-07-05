// tslint:disable: directive-selector

import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[modalHost]'
})
export class ModalDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
