import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../Models/Project/project.model';
import { PROJECTS } from '../Data/Projects.Data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Retourne les données encapsulées dans un Observable RxJS
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}