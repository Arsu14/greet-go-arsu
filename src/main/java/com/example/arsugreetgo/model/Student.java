package com.example.arsugreetgo.model;

public class Student {
    private Long id ;
    private String name ;
    private String surname ;
    private String groupName;

    public Student(Long id, String name, String surname, String groupName) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.groupName = groupName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", groupName='" + groupName + '\'' +
                '}';
    }
}
