package com.example.arsugreetgo.mapper;

import com.example.arsugreetgo.model.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface StudentMapper {

    @Select("select *from student")
    List<Student> findAll();

    @Insert("insert into student(name , surname , groupName) values (#{name} , #{surname} , #{groupName})")
    void insert(Student student);

    @Delete("delete from student where id = #{id}")
    void delete(Student student);
}
