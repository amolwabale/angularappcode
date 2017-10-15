import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../Views/Home/home.component';
import { TodoComponent } from '../../Views/TodoDetails/todo.component';


export const routes: Routes = [
    { path: 'TodoDetails/:id', component: TodoComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
