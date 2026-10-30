import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | undefined | null,
    limit: number = 50,
    suffix: string = '…'
  ): string {
    // 1. Valeur absente : retourne une chaîne vide
    if (!value) {
      return '';
    }

    // 2. Texte court : reste inchangé
    if (value.length <= limit) {
      return value;
    }

    // 3. Texte long : coupé, espaces de fin retirés (.trimEnd()) + suffixe
    return value.substring(0, limit).trimEnd() + suffix;
  }
}