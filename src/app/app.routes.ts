import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] }, // i use canActivate property to specify which guard this route it will use as protection
    { path: '**', redirectTo: 'login' }, // Wildcard route for 404
];