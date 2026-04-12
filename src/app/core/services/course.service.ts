import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:3000/courses"
  private courses: Course[] = [];



  getCourses(): Observable<Course[]> {
    if (this.courses.length > 0) {
      return of(this.courses);
    }
    return this.httpClient.get<Course[]>(this.apiUrl).pipe(
      tap(courses => this.courses = courses)  // Add this to cache
    );
  }

  getCourseById(id: number) {
    return this.courses.find(c => c.id === id);
  }
  filtersCourses(catId: number): Course[] {
    if (catId == 0) {
      return this.courses;
    }
    return this.courses.filter((course) => course.catId == catId);
  }
}
