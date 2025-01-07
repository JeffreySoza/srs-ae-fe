import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Default route
    { path: 'users', component: UsersComponent },
    { path: '**', redirectTo: '' }, // Wildcard route for 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }