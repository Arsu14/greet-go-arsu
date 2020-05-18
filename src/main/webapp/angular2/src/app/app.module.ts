import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentListComponent } from './student-list/student-list.component';

import {StudentService } from "./student/student.service";
import { RegistrationComponent } from './registration/registration.component';
import {RegistrationService} from "./registration/registration.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService , RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
