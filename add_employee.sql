USE employees_db;
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, ?, ?, e.id FROM employee e
LEFT JOIN employee_role er on ? = er.title
WHERE e.first_name = ? AND e.last_name = ?;