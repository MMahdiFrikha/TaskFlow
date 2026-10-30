import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Models/project.model';
import { TaskPriority } from '../../Models/task.model';
import { InitialsPipe } from '../../shared/pipes/initials-pipe';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TaskList, InitialsPipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  project = input.required<Project>();
  projectSelected = output<Project>();

  // Taux de réalisation : tâches terminées / nombre total (ou 0 si aucune tâche)
  completionRate = computed(() => {
    const tasks = this.project().tasks;
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'Terminé').length;
    return completed / tasks.length;
  });

  // Coût moyen par tâche : budget / total des tâches (null si aucune tâche pour éviter division par zéro)
  averageCostPerTask = computed<number | null>(() => {
    const tasks = this.project().tasks;
    if (!tasks || tasks.length === 0) return null;
    return this.project().budget / tasks.length;
  });

  // Regroupement par priorité pour le pipe keyvalue
  taskCountByPriority = computed<Record<TaskPriority, number>>(() => {
    const counts: Record<TaskPriority, number> = {
      Haute: 0,
      Moyenne: 0,
      Basse: 0
    };
    for (const task of this.project().tasks) {
      if (counts[task.priority] !== undefined) {
        counts[task.priority]++;
      }
    }
    return counts;
  });

  get barColor(): string {
    const percentage = this.completionRate() * 100;
    if (percentage < 34) {
      return '#ef4444'; // Rouge
    } else if (percentage <= 66) {
      return '#f59e0b'; // Orange
    }
    return '#22c55e'; // Vert
  }

  selectProject(): void {
    this.projectSelected.emit(this.project());
  }
}