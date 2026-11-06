import { Directive, ElementRef, HostListener, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  // Texte de l'infobulle transmis via [appTooltip]="..."
  tooltipText = input.required<string>({ alias: 'appTooltip' });

  // Référence vers l'élément <span> de l'infobulle créée dynamiquement
  private tooltipElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    // Si pas de texte ou si l'infobulle existe déjà, ne rien faire
    if (!this.tooltipText() || this.tooltipElement) {
      return;
    }

    // 1. Positionner l'élément hôte en relatif pour caler l'infobulle en absolu
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

    // 2. Créer l'élément <span> avec createElement
    this.tooltipElement = this.renderer.createElement('span');

    // 3. Injecter le texte sans utiliser innerHTML
    const textNode = this.renderer.createText(this.tooltipText());
    this.renderer.appendChild(this.tooltipElement, textNode);

    // 4. Styliser l'infobulle (classes Tailwind + styles de positionnement)
    const classes = [
      'absolute',
      'left-0',
      'top-full',
      'mt-1.5',
      'z-50',
      'max-w-xs',
      'w-max',
      'px-2.5',
      'py-1.5',
      'bg-slate-900',
      'text-white',
      'text-[10px]',
      'leading-snug',
      'rounded-md',
      'shadow-lg',
      'pointer-events-none'
    ];
    for (const cls of classes) {
      this.renderer.addClass(this.tooltipElement, cls);
    }

    // 5. Attacher le <span> à l'élément hôte avec appendChild
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.removeTooltip();
  }

  // Nettoyage sécurisé
  private removeTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}