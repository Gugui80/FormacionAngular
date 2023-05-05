import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppFondoRojo]'
})
export class AppFondoRojoDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.background = 'lightblue';
   }

}
