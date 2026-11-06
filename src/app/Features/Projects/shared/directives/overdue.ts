import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[appOverdue]',
  standalone: true
})
export class OverdueDirective {
  // Entrées : échéance (optionnelle) et état terminé de la tâche
  dueDate = input<string | undefined | null>();
  done = input<boolean>(false);

  // Lie dynamiquement les classes Tailwind à l'élément hôte
  @HostBinding('class')
  get overdueClasses(): string {
    // Si la tâche est terminée ou n'a pas de date d'échéance : aucune classe ajoutée
    if (this.done() || !this.dueDate()) {
      return '';
    }

    const targetDate = new Date(this.dueDate()!);
    if (isNaN(targetDate.getTime())) {
      return '';
    }

    // Normalisation à minuit pour comparer les jours calendaires
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    // Si l'échéance est strictement antérieure à aujourd'hui et non terminée
    const isOverdue = targetDate.getTime() < today.getTime();

    return isOverdue ? 'border-red-500 bg-red-50' : '';
  }
}