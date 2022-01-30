USE employees_db;
INSERT INTO employee_role (title, salary, department_id)
VALUE (?, ?, (SELECT d.id FROM department d WHERE department_name = ?));

