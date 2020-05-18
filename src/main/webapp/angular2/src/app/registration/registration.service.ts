import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Registration} from "./registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private  registrationServiceURL = "";
  constructor(private http:HttpClient) { }

  checkRegistration(registration:Registration) : Observable<Registration>
  {
    return this.http.post<Registration>(this.registrationServiceURL , registration);
  }

}
