import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: 'roadmap.component.css'
})
export class RoadmapComponent implements OnInit {

  roadmap: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));

    if (id) {
      const course = this.courseService.getCourseById(id);
      this.roadmap = course?.roadmap || [];
    }
  }
}