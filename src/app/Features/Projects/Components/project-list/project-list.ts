import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../../Models/Project/project.model';
import { ProjectService } from '../../Service/project.service'; 
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList implements OnInit {
  // Injection moderne de dépendances
  private projectService = inject(ProjectService);

  // Signal initialisé à vide (les données viendront du service RxJS)
  projects = signal<Project[]>([]);

  searchTerm = signal<string>('');
  selectedProject: Project | null = null;

  // Le computed reste identique et réagira dès que le signal se mettra à jour
  filteredProjects = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const allProjects = this.projects();

    if (!term) {
      return allProjects;
    }

    return allProjects.filter(project =>
      project.name.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    );
  });

  // Cycle de vie du composant
  ngOnInit(): void {
    // Souscription explicite à l'Observable pour hydrater le Signal
    this.projectService.getProjects().subscribe({
      next: (projectsData) => {
        this.projects.set(projectsData);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des projets :', err);
      }
    });
  }

  onProjectSelected(project: Project): void {
    console.log(project);
    this.selectedProject = project;
  }
}