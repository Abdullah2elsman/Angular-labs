import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Category } from '../../../models/category.model';
import { CategoryServices } from '../../../core/services/category.service';

@Component({
  selector: 'app-order.component',
  imports: [CoursesComponent, CurrencyPipe, CoursesComponent, FormsModule],
  templateUrl: './order.component.html',
})
export class OrderComponent {
  selectedCatId: number = 0;
  totalPrice: number = 0;
  categories: Category[] = [];
  constructor(private categoryService: CategoryServices) { }
  
  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  addToTotalPrice(price: number) {
    this.totalPrice += price;
  }
}
