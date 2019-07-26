import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // setter for property binding
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcref.createEmbeddedView(this.template); // creates the view
    } else {
      this.vcref.clear(); // destroys it
    }
  }

  constructor(private template: TemplateRef<any>, private vcref: ViewContainerRef) { }
}
