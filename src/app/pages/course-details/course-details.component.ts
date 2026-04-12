import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CourseService } from '../../core/services/course.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CurrencyPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './course-details.component.html',
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;  
  allCourses: Course[] = [];
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private router = inject(Router);
  private id: string = '';

  ngOnInit() {
    // this.allCourses = this.courseService.getCourses();
    this.route.params.subscribe((params) => {
      this.id = params['id'];
        this.course = this.courseService.getCourseById(+this.id);
    });
  }
  goToNext() {
    const currentIndex = this.allCourses.findIndex(c => c.id === this.course?.id);
    if (currentIndex < this.allCourses.length - 1) {
      const nextId = this.allCourses[currentIndex + 1].id;
      this.router.navigate(['/course-details', nextId]);
    }
  }

  goToPrev() {
    const currentIndex = this.allCourses.findIndex(c => c.id === this.course?.id);
    if (currentIndex > 0) {
      const prevId = this.allCourses[currentIndex - 1].id;
      this.router.navigate(['/course-details', prevId]);
    }
  }
}