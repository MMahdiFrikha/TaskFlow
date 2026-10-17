import { Task, ISODateString } from '../Task/task.model';

export type ProjectStatus = 'En attente' | 'En cours' | 'Terminé';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  startDate: ISODateString;    
  budget: number;              
  tasks: Task[];
}