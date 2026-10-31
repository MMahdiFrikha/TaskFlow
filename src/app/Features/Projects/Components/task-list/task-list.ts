import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskPriority, TaskStatus } from '../../Models/task.model';
import { TruncatePipe } from '../../shared/pipes/truncate-pipe'; 
import { DeadlinePipe } from '../../shared/pipes/deadline-pipe';
import { InitialsPipe } from '../../shared/pipes/initials-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TruncatePipe, DeadlinePipe, InitialsPipe], // <-- Tous les pipes importés ici
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks = input.required<Task[]>();

  // 4. Objet de correspondance Priorité -> Couleur HEX (équivalent du rôle -> couleur)
  priorityColors: Record<TaskPriority, string> = {
    'Haute': '#ef4444',    // Rouge vif
    'Moyenne': '#f59e0b',  // Orange
    'Basse': '#64748b'     // Gris ardoise
  };

  getPriorityColor(priority: TaskPriority): string {
    return this.priorityColors[priority] ?? '#94a3b8';
  }

  // Détermine si la tâche est active (non terminée)
  isTaskActive(status: TaskStatus): boolean {
    return status !== 'Terminé';
  }

  getStatusTheme(status: TaskStatus) {
    switch (status) {
      case 'Terminé':
        return {
          cardBorder: 'border-l-4 border-l-emerald-500 border-gray-200',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        };
      case 'En cours':
        return {
          cardBorder: 'border-l-4 border-l-blue-500 border-gray-200',
          badge: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'En attente':
        return {
          cardBorder: 'border-l-4 border-l-amber-500 border-gray-200',
          badge: 'bg-amber-50 text-amber-700 border-amber-200'
        };
      default:
        return {
          cardBorder: 'border-l-4 border-l-gray-400 border-gray-200',
          badge: 'bg-gray-50 text-gray-700 border-gray-200'
        };
    }
  }

  getPriorityClasses(priority: TaskPriority): string {
    switch (priority) {
      case 'Haute':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Moyenne':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Basse':
        return 'bg-slate-50 text-slate-600 border-slate-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  }
}