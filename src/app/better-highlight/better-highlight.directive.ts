import { Directive, Input, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultcolor:string='transparent';
  @Input() highlightedcolor: string='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor=this.defaultcolor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor=this.highlightedcolor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor=this.defaultcolor;
  }
}
