import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from '../../shared/pipes/initials-pipe';
import { User } from '../../Models/user.model';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, InitialsPipe],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  user = input.required<User>();

  // Role -> Color mapping object
  roleColors: Record<string, string> = {
    'Admin': '#8b5cf6',       // Violet
    'Manager': '#3b82f6',     // Blue
    'Développeur': '#10b981'  // Emerald
  };

  get avatarColor(): string {
    return this.roleColors[this.user().role] ?? '#64748b';
  }
}