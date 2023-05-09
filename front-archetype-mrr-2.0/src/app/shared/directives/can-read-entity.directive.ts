import { Directive } from '@angular/core';

@Directive({
  selector: '[appCanReadEntity]'
})
export class CanReadEntityDirective {

  constructor() { }

  canRead(): boolean {
    return false;
  }

}
