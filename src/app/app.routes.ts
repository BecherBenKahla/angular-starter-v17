import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/general/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./pages/general/signup/signup.module').then(m => m.SignupModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/general/about/about.module').then(m => m.AboutModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/general/contact/contact.module').then(m => m.ContactModule)

    },
    { path: '**', component: NotFoundComponent },
];
