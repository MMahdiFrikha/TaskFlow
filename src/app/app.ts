import { Component } from '@angular/core';
import { ProjectList } from './Features/Projects/Components/project-list/project-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'TaskFlow';
}