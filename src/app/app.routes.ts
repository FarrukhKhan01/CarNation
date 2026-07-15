import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Signup } from './features/auth/pages/signup/signup';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Home } from './features/home/pages/home/home';
import { CarList } from './features/cars/pages/car-details/car-list/car-list';
import { CarDetails } from './features/cars/pages/car-details/car-details';
import { Admin } from './features/admin/pages/admin/admin';
import { Favourites } from './features/favourites/pages/favourites/favourites';
import { Profile } from './features/profile/pages/profile/profile';
import { NotFound } from './features/notFound/pages/not-found/not-found';

export const routes: Routes = [



    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    { path: 'dasboard', component: Dashboard },
    { path: 'car-list', component: CarList },
    { path: 'car-details', component: CarDetails },
    { path: 'car-list', component: CarList },
    { path: 'admin', component: Admin },
    { path: 'favourites', component: Favourites },
    { path: 'profile', component: Profile },
    { path: '**', component: NotFound },

];

