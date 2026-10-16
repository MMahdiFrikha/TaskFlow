import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskPriority, TaskStatus } from '../../Models/Task/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks = input.required<Task[]>();

  // Style de la bordure latérale et des puces selon l'état d'avancement
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

  // Style d'affichage des priorités
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