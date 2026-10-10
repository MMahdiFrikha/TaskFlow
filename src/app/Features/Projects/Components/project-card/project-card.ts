import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Models/Project/project.model';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TaskList],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  // Signal input obligatoire
  project = input.required<Project>();

  // Output moderne
  projectSelected = output<Project>();

  selectProject(): void {
    this.projectSelected.emit(this.project());
  }
}