import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "./student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:Student;

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.student = new Student(0,"","","");
  }

  saveStudent(): void{
    console.log(this.student);
    this.studentService.saveStudent(this.student).subscribe(student =>this.student = student);
    console.log(this.student.surname + " saved!!" );
    this.router.navigate(["/list"]);
  }

}
