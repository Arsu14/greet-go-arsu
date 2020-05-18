import { Component, OnInit } from '@angular/core';
import {Registration} from "./registration";
import {RegistrationService } from "./registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration:Registration ;

  constructor(private registrationService:RegistrationService , private router:Router) { }

  ngOnInit(): void {
    this.registration =new Registration("" , "");
  }

  checkRegistration():void {
    console.log(this.registration);

    if(this.registration.login == 'arsu' && this.registration.password == '123') {
       console.log(this.registration.login);
       this.router. navigate(["/list"]);
       }
    }
}
