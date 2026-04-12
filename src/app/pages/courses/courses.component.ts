import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryServices } from '../../core/services/category.service';
import { CourseService } from '../../core/services/course.service';
import { Category } from '../../models/category.model';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';

@Component({
  selector: 'app-courses.component',
  imports: [CourseCardComponent, CurrencyPipe, FormsModule],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  selectedCatId: number = 0;
  totalPrice: number = 0;
  categories: Category[] = [];
  private categoryService = inject(CategoryServices);
  private courseService = inject(CourseService);

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(res)
    })
    this.courseService.getCourses().subscribe();
  }

  addToTotalPrice(price: number) {
    this.totalPrice += price;
  }
}
