import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deadline',
  standalone: true
})
export class DeadlinePipe implements PipeTransform {
  transform(dueDate: string | null | undefined): string {
    // 1. Gestion de la valeur absente
    if (!dueDate) {
      return 'Pas d’échéance';
    }

    // Normalisation des dates à minuit pour comparer uniquement les jours calendaires
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(dueDate);
    // Gestion d'une chaîne invalide
    if (isNaN(target.getTime())) {
      return 'Pas d’échéance';
    }
    target.setHours(0, 0, 0, 0);

    // Calcul de la différence en millisecondes convertie en jours entiers
    const diffMs = target.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    // 2. Échéance aujourd'hui
    if (diffDays === 0) {
      return 'Aujourd’hui';
    }

    // 3. Échéance demain
    if (diffDays === 1) {
      return 'Demain';
    }

    // 4. Échéance future
    if (diffDays > 1) {
      return `Dans ${diffDays} jours`;
    }

    // 5. Échéance dépassée (retard)
    const overdueDays = Math.abs(diffDays);
    const dayLabel = overdueDays === 1 ? 'jour' : 'jours';
    return `En retard de ${overdueDays} ${dayLabel}`;
  }
}