import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class AppDisableAfterClick {
  constructor(private element: ElementRef, private renderer2: Renderer2) { }
  
  @HostListener('click')
  onClick() {
    const originalText = this.element.nativeElement.innerText;

    this.renderer2.setProperty(this.element.nativeElement, 'disabled', true);

    this.renderer2.setProperty(this.element.nativeElement, 'innerText', 'Processing...');

    setTimeout(()=>{
      this.renderer2.setProperty(this.element.nativeElement, 'disabled', false);
      this.renderer2.setProperty(this.element.nativeElement, 'innerText', originalText);
    }, 3000);
  }
}
