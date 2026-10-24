export type ISODateString = `${number}-${number}-${number}`;

export type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';
export type TaskStatus = 'En attente' | 'En cours' | 'Terminé';

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: ISODateString;     
  description?: string;
}