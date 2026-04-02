import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './shared/components/courses/courses.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesComponent,],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('lab2');
}
