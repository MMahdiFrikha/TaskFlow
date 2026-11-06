import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectList } from './Features/Projects/Components/project-list/project-list';
import { UserCard } from './Features/Projects/Components/user-card/user-card';
import { User } from './Features/Projects/Models/user.model';
import { USERS } from './Features/Projects/Data/Users.Data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProjectList, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'TaskFlow';
  users = signal<User[]>(USERS);
}