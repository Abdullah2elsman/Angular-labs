import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryServices {

  private httpClient = inject(HttpClient);
  private apiUrl = "http://localhost:3000/categories"
  private categories: Category[] = [];

  getCategories(): Observable<Category[]> {
    if (this.categories.length > 0) {
      return of(this.categories);
    }
    return this.httpClient.get<Category[]>(this.apiUrl).pipe(
      tap(categories => this.categories = categories)
    );
  }
}
