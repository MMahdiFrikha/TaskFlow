import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../../Models/Project/project.model';
import { PROJECTS } from '../../Data/Projects.Data'; 
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  // Load initial list from project data file
  projects: Project[] = PROJECTS;

  // Search input binding
  searchTerm: string = '';

  // Track the project selected via ProjectCard output
  selectedProject: Project | null = null;

  // Filter projects by name or description
  get filteredProjects(): Project[] {
    if (!this.searchTerm.trim()) {
      return this.projects;
    }
    const query = this.searchTerm.toLowerCase().trim();
    return this.projects.filter(project =>
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
  }

  onProjectSelected(project: Project): void {
  console.log(project);
  this.selectedProject = project;
}
}