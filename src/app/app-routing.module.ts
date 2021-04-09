import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { HomeComponent } from './home/home.component';
import { NewCourComponent } from './new-cour/new-cour.component';

const routes: Routes = [
  { path:'Home-Component',component: HomeComponent},
  { path:'NewCourComponent',component: NewCourComponent},
  { path:'cours-component',component: CoursComponent},
  { path:'' ,redirectTo:'/Home-Component',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
