import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardStyle]'
})
export class CardStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.setGradient('linear-gradient(65deg, rgba(90, 235, 237, 1) 0%, rgba(178, 219, 195, 1) 54%, rgba(151, 204, 170, 1) 100%)');
    this.setTransition();
  }


  private setGradient(gradient: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background', gradient);
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '12px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '20px');
  }

  private setTransition() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.4s ease');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.setGradient('linear-gradient(135deg, #66edc4ff, #7b999fff)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setGradient('linear-gradient(65deg, rgba(90, 235, 237, 1) 0%, rgba(178, 219, 195, 1) 54%, rgba(151, 204, 170, 1) 100%)');
  }
}
