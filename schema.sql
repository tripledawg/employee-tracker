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
	


-- a composite key is also a primary key, but the difference is that it is made by the combination of more than one
-- column to identify the particular row in the table.

-- Composite Key:

-- A composite key is made by the combination of two or more columns in a table that can be used to uniquely 
-- identify each row in the table when the columns are combined uniqueness of a row is guaranteed, 
--but when it is taken individually it does not guarantee uniqueness, or it can also be understood as a primary key 
--made by the combination of two or more attributes to uniquely identify every row in a table. 
--  A composite key can also be made by the combination of more than one candidate key.
-- A composite key cannot be null.
