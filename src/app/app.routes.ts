import { Routes } from '@angular/router';
import { CoursesComponent } from './shared/components/courses/courses.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'about-us', component: AboutUsComponent },
    {path: 'contact-us', component: ContactUsComponent},
    { path: '**', component: NotFoundComponent },
];
