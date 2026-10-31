import { Directive, ElementRef, HostListener, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Couleur personnalisable via [appHighlight]="'#f1f5f9'" ou couleur par défaut
  highlightColor = input<string>('#f8fafc', { alias: 'appHighlight' });

  // Sauvegarde de la couleur de fond initiale
  private defaultColor: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Capture de la couleur initiale définie sur l'élément hôte
    this.defaultColor = this.el.nativeElement.style.backgroundColor || '';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const color = this.highlightColor() || '#f8fafc';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
  }
}