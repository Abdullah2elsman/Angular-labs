import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { OrderComponent } from './shared/components/order/order.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: OrderComponent },
    { path: 'about-us', component: AboutUsComponent },
    {path: 'contact-us', component: ContactUsComponent},
    { path: '**', component: NotFoundComponent },
];
