import { CurrencyPipe, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { Course } from '../../../models/course.model';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  imports: [
    NgClass,
    FormsModule,
    DiscountPipe,
    AppDisableAfterClick,
    RouterLink,
    CurrencyPipe],
})
export class CourseCardComponent implements OnInit, OnChanges {
  @Input() selectedCatId: number = 0;
  @Output() onCourseEnroll = new EventEmitter<number>();

  private allCourses: Course[] = [];
  courses: Course[] = [];
  private courseService = inject(CourseService);

  ngOnInit() {
    this.courseService.getCourses().subscribe((res) => {
      this.allCourses = res;
      console.log(res);
      this.applyFilter();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCatId'] && !changes['selectedCatId'].firstChange) {
      if (this.allCourses.length > 0) {
        this.applyFilter();
      }
    }
  }

  private applyFilter() {
    this.courses = this.courseService.filtersCourses(this.selectedCatId);
  }

  enroll(price: number, discount: number) {
    price = price - (price * (discount / 100));
    this.onCourseEnroll.emit(price);
  }
}
