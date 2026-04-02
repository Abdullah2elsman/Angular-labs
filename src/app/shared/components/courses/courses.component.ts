import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Course } from '../../../models/course.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [NgClass,CommonModule, FormsModule],
})
export class CoursesComponent implements OnInit{
  courses: Course[] = [
    {
      id: 201,
      title: 'Advanced Angular Architecture',
      instructor: 'Eng. Mona Ali',
      price: 2500,
      seats: 12,
      image: 'images/advanced angular.jpeg',
      catId: 1,
    },
    {
      id: 202,
      title: 'Node.js Backend Mastery',
      instructor: 'Dr. Ahmed Ibrahim',
      price: 2200,
      seats: 8,
      image: 'images/Backend Mastery with node.jpg',
      catId: 1,
    },
    {
      id: 203,
      title: 'UI/UX Design Patterns',
      instructor: 'Sarah Hassan',
      price: 1800,
      seats: 0,
      image: 'images/UI UX patterns.webp',
      catId: 2,
    },
    {
      id: 204,
      title: 'React Native Mobile Apps',
      instructor: 'Hany Mahmoud',
      price: 2100,
      seats: 15,
      image: 'images/react native mobile.png',
      catId: 1,
    },
    {
      id: 205,
      title: 'DevOps for Beginners',
      instructor: 'Osama Sayed',
      price: 3000,
      seats: 5,
      image: 'images/dev ops for beginners.jpeg',
      catId: 3,
    },
    {
      id: 206,
      title: 'Digital Marketing Strategy',
      instructor: 'Layla Kamel',
      price: 1200,
      seats: 20,
      image: 'images/digital marketing stratigy.jpeg',
      catId: 4,
    },
    {
      id: 207,
      title: 'Python for Data Science',
      instructor: 'Dr. Tarek Omar',
      price: 2800,
      seats: 10,
      image: 'images/python for data science.jpeg',
      catId: 1,
    },
    {
      id: 208,
      title: 'Graphic Design with Photoshop',
      instructor: 'Nour El-Din',
      price: 900,
      seats: 2,
      image: 'images/graphic design with photoshop.jpeg',
      catId: 2,
    },
    {
      id: 209,
      title: 'Cyber Security Essentials',
      instructor: 'Khaled Fawzy',
      price: 3500,
      seats: 6,
      image: 'images/cyber security essentials.jpeg',
      catId: 3,
    },
    {
      id: 210,
      title: 'SEO and Content Writing',
      instructor: 'Amira Refaat',
      price: 1100,
      seats: 25,
      image: 'images/seo content writing.jpeg',
      catId: 4,
    },
  ];

  categories: Category[] = [
    { id: 1, name: 'programming' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Design' },
  ];
  ngOnInit() {
    this.filteredCourses = this.courses;
  }
  filteredCourses: Course[] = [];

  selectedCatId: number = 0;
  filterByCategory() {
    if (this.selectedCatId == 0) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.catId == this.selectedCatId);
    }
  }
}
