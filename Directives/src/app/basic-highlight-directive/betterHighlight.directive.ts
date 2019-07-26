import { OnInit, Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // binding on directive bacground style
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  // listens to an event on directire
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouveleave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
