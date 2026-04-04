import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../core/services/course.service';
import { Course } from '../../../models/course.model';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  imports: [NgClass, CommonModule, FormsModule, DiscountPipe, AppDisableAfterClick],
})
export class CoursesComponent implements OnInit, OnChanges {
  @Input() selectedCatId: number = 0;
  @Output() onCourseEnroll = new EventEmitter<number>();
  allCourses: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.allCourses = this.courseService.getCourses();
    this.courses = this.allCourses;
  }

  enroll(price: number, discount: number) {
    price = price - (price * (discount / 100));
    this.onCourseEnroll.emit(price);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.courses = this.courseService.filtersCourses(this.selectedCatId);
  }
}
