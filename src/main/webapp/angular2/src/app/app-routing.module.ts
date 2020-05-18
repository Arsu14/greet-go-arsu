import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {RegistrationComponent} from "./registration/registration.component";



const routes:Routes = [
  {path:'' , redirectTo: 'registration' , pathMatch:'full'},
  {path:'add' , component:StudentComponent},
  {path:'list' , component:StudentListComponent},
  {path: 'registration' , component:RegistrationComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
