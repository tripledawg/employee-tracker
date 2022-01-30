USING employees_db;
UPDATE employee SET employee_role_id = (SELECT id FROM employee_role where title = ?) WHERE first_name = ? AND last_name = ?;