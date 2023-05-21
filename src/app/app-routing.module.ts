import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';

const routes:Routes=[
  {
    path:"liste/departement",
    component:DepartementComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
