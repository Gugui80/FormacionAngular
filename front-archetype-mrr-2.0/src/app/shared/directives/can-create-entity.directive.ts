import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCanCreateEntity]'
})
export class CanCreateEntityDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private el:ElementRef, private renderer:Renderer2) { 
      /*console.log(this.renderer);
      this.renderer.setStyle(this.el.nativeElement,'fontSize','500px');*/
    }

  @Input()
  set appCanCreateEntity(canCreate: boolean) {
    if (canCreate) {
      for (var i = 0; i < 5; i++){
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
 
      }
    }
  }

  canCreate(): boolean {
    return false;
  }
}
