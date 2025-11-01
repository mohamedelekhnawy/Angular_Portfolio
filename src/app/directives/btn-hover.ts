import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnHover]'
})
export class BtnHover {

 constructor(private el: ElementRef, private renderer:Renderer2) {
    // styles الأساسية
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px 12px');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'rgba(0, 0, 0, 0.114)');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid rgba(255,255,255,0)');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'backdrop-filter', 'blur(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 15px 35px rgba(0,0,0,.2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'rgba(0, 0, 0, 0.2)');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'rgba(255,255,255,0.4)');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'rgba(0, 0, 0, 0.114)');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'rgba(255,255,255,0)');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '15px');
  }
}
