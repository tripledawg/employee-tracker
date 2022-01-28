DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
  id INT NOT NULL auto_increment PRIMARY KEY,  
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
  id INT auto_increment PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT auto_increment PRIMARY KEY,
  employee_role_id INT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT REFERENCES employee(id),
  FOREIGN KEY (employee_role_id)
  REFERENCES employee_role(id)
);
	
