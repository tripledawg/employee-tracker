INSERT INTO department (department_name)
VALUES ('Paper Solutions'),('Software Solutions');
  

INSERT INTO employee_role (title, salary, department_id)
VALUES ('Sales', 55000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('Customer Service', 55000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('Temp', 25000, (SELECT id FROM department WHERE department_name='Paper Solutions')),
('Accountant', 55000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('Warehousing', 45000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('Manager', 60000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('HR', 50000,(SELECT id FROM department WHERE department_name='Paper Solutions')),
('Manager', 130000, (SELECT id FROM department WHERE department_name='Software Solutions')),
('Engineer', 85000, (SELECT id FROM department WHERE department_name='Software Solutions')),
('Junior Dev', 65000, (SELECT id FROM department WHERE department_name='Software Solutions')),
('CEO', 150000, (SELECT id FROM department WHERE department_name='Software Solutions')),
('Incubator', 150000, (SELECT id FROM department WHERE department_name='Software Solutions')),
('Personal Assistant', 150000, (SELECT id FROM department WHERE department_name='Software Solutions'));

INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
VALUES ((SELECT er.id FROM employee_role er JOIN department dr on dr.id = er.department_id WHERE er.title='Manager' AND dr.department_name = 'Paper Solutions'),'Michael','Scott', NULL),
((SELECT er.id FROM employee_role er JOIN department dr on dr.id = er.department_id WHERE er.title='Manager' AND dr.department_name = 'Software Solutions'),'Monica', 'Hall', null);

INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Dwight', 'Schrute', e.id FROM employee e
    LEFT JOIN employee_role er on 'Sales' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Jim', 'Halpert', e.id FROM employee e
    LEFT JOIN employee_role er on 'Sales' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Oscar', 'Martinez', e.id FROM employee e
    LEFT JOIN employee_role er on 'Accountant' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Darryl', 'Philbin', e.id FROM employee e
    LEFT JOIN employee_role er on 'Warehousing' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Angela', 'Martin', e.id FROM employee e
    LEFT JOIN employee_role er on 'Accountant' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Toby', 'Flenderson', e.id FROM employee e
    LEFT JOIN employee_role er on 'HR' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
    INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Ryan', 'Howard', e.id FROM employee e
    LEFT JOIN employee_role er on 'Temp' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Kelly', 'Kapoor', e.id FROM employee e
    LEFT JOIN employee_role er on 'Customer Service' = er.title
    WHERE e.first_name = 'Michael' AND e.last_name = 'Scott';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Erlich', 'Bachman', e.id FROM employee e
    LEFT JOIN employee_role er on 'Incubator' = er.title
    WHERE e.first_name = 'Monica' AND e.last_name = 'Hall';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Richard', 'Hendricks', e.id FROM employee e
    LEFT JOIN employee_role er on 'Engineer' = er.title
    WHERE e.first_name = 'Monica' AND e.last_name = 'Hall';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Dinesh', 'Chugtai', e.id FROM employee e
    LEFT JOIN employee_role er on 'Engineer' = er.title
    WHERE e.first_name = 'Monica' AND e.last_name = 'Hall';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Bertram', 'Gilfoyle', e.id FROM employee e
    LEFT JOIN employee_role er on 'Engineer' = er.title
    WHERE e.first_name = 'Monica' AND e.last_name = 'Hall';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Jared', 'Dunn', e.id FROM employee e
    LEFT JOIN employee_role er on 'Personal Assistant' = er.title
    WHERE e.first_name = 'Monica' AND e.last_name = 'Hall';
INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
SELECT er.id, 'Jian', 'Yang', e.id FROM employee e
    LEFT JOIN employee_role er on 'Engineer' = er.title
    WHERE e.first_name = 'Erlich' AND e.last_name = 'Bachman';



