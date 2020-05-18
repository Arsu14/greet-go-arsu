package com.example.arsugreetgo.resource;

import com.example.arsugreetgo.mapper.StudentMapper;
import com.example.arsugreetgo.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentResource  {
    private StudentMapper studentMapper;

    public StudentResource(StudentMapper studentMapper) {
        this.studentMapper = studentMapper;
    }

    @GetMapping("/student")
    public List<Student> findAll(){
        return studentMapper.findAll();
    }

    @PostMapping("/student/add")
    public String addStudent(@RequestBody Student student){
        System.out.println(student);
        studentMapper.insert(student);
        return "redirect:/rest/student";
    }

    @DeleteMapping(value = "/student/{id}")
    public String deleteStudent(@PathVariable(name = "id") Long id){
        System.out.println(id);
        List<Student> students = studentMapper.findAll() ;
        int index = 0 ;
        boolean check = false;
        for(int i = 0 ; i < students.size() ; i++){
            if(students.get(i).getId() == id){
                index = i ;
                check = true ;
            }
        }
        if(check) {
            studentMapper.delete(students.get(index));
        }
        return "redirect:/rest/student";
    }



}
