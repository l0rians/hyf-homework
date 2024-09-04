-- Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE DATABASE IF NOT EXISTS school;

USE school; 

CREATE TABLE class (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  begins DATE,
  ends DATE
);

CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE INDEX student_name ON student(name);

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');
