import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentServiceURL = "http://localhost:9096/rest/student";
  constructor(private http:HttpClient) { }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.studentServiceURL)
  }

  deleteStudent(id):Observable<any>{
    return this.http.delete<any>(this.studentServiceURL+"/"+id);
  }

  saveStudent(student : Student): Observable<Student> {
    return this.http.post<Student>(this.studentServiceURL+"/add", student);
  }
}

