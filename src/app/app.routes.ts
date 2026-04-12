import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { RoadmapComponent } from './shared/components/roadmap/roadmap.component';
import { ReviewComponent } from './shared/components/review/review.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'courses', component: CoursesComponent, title: 'Courses' },
      {
        path: 'course-details/:id',
        component: CourseDetailsComponent,
        title: 'Course Details',
        children: [
          { path: '', redirectTo: ' roadmap', pathMatch: 'full'},
          { path: 'roadmap', component: RoadmapComponent },
          { path: 'reviews', component: ReviewComponent}
        ]
        
      },
      { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
      { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
    ],
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: '**', component: NotFoundComponent },
];
