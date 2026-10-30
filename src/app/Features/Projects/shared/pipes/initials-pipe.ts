import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true
})
export class InitialsPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    // 1. Valeur absente ou vide
    if (!value || !value.trim()) {
      return '?';
    }

    // 2. Découper par les espaces en ignorant les espaces multiples
    const words = value.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    // 3. Extraire la première lettre des deux premiers mots
    const firstInitial = words[0].charAt(0).toUpperCase();
    const secondInitial = words[1].charAt(0).toUpperCase();

    return `${firstInitial}${secondInitial}`;
  }
}