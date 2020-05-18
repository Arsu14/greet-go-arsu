DROP TABLE IF EXISTS student;

CREATE TABLE student(
                        id INT AUTO_INCREMENT primary key ,
                        name VARCHAR(50) NOT NULL ,
                        surname VARCHAR(50) NOT NULL ,
                        groupName VARCHAR(50) NOT NULL ,
)
