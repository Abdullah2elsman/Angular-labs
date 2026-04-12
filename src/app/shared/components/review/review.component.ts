import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { Review } from '../../../models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: 'review.component.css'
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));

    if (id) {
      const course = this.courseService.getCourseById(id);
      this.reviews = course?.reviews || [];
    }
  }
}