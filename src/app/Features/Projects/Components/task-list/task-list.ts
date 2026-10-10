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
  // Input moderne sous forme de Signal
  tasks = input.required<Task[]>();

  getStatusClasses(status: TaskStatus): string {
    switch (status) {
      case 'Terminé':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'En cours':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'En attente':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  getPriorityClasses(priority: TaskPriority): string {
    switch (priority) {
      case 'Haute':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'Moyenne':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Basse':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  }
}