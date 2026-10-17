import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Models/Project/project.model';
import { TaskPriority } from '../../Models/Task/task.model';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TaskList],
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

  selectProject(): void {
    this.projectSelected.emit(this.project());
  }
}