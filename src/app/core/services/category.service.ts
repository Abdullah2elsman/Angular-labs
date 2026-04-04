import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryServices {
  categories: Category[] = [
    { id: 1, name: 'programming' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Design' },
  ];

  getCategories() {
    return this.categories;
  }
}
