import { Component, OnInit } from '@angular/core';
import {Student} from "../student/student";
import {StudentService} from "../student/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  title = 'Student List';
  noStudent = "No Student";

  students:Student[] ;

  constructor( private studentServices:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void{
    this.studentServices.getStudents().subscribe(students => this.students = students)
  }
  deleteStudent(student:Student):void{
    this.studentServices.deleteStudent(student.id).subscribe(response=>{
      alert(response.message);
      this.getStudents();
    })
  }

}
