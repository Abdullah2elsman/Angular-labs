import { CommonModule, NgClass } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category.model';
import { Course } from '../../../models/course.model';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CourseService } from '../../../core/services/course.service';
import { CategoryServices } from '../../../core/services/category.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  imports: [NgClass, CommonModule, FormsModule, DiscountPipe, AppDisableAfterClick],
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  courses: Course[] = [];
  categories: Category[] = [];
  selectedCatId: number = 0;

  constructor(private courseService: CourseService, private categoryService: CategoryServices) { }
  
  ngOnInit() {
    this.allCourses = this.courseService.getCourses();
    this.courses = this.allCourses;
    this.categories = this.categoryService.getCategories();
  }

  filterByCategory() {
    this.courses = this.courseService.filtersCourses(this.selectedCatId);
  }
}