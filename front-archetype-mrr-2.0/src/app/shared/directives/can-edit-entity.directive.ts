import { Directive } from '@angular/core';

@Directive({
  selector: '[appCanEditEntity]'
})
export class CanEditEntityDirective {

  constructor() { }

}
