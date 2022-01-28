INSERT INTO department (department_name)
VALUES ('Paper Solutions'),
        ('Software Solutions');
  

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
VALUES ((SELECT id FROM employee_role WHERE title='Sales'),'Dwight', 'Schrute', (SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Sales'),'Jim','Halpert',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Accountant'),'Oscar','Martinez',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Warehousing'),'Darryl','Philbin',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Accountant'),'Angela','Martin',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='HR Rep'),'Toby','Flenderson',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Temp'),'Ryan','Howard',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott'),
((SELECT id FROM employee_role WHERE title='Customer Service'),'Kelly', 'Kapoor',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Manager'),'Michael','Scott', NULL),
((SELECT id FROM employee_role WHERE title='Incubator'),'Erlich','Bachman',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Engineer'),'Richard','Hendricks',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Engineer'),'Dinesh','Chugtai',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Engineer'),'Bertram','Gilfoyle',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Manager'),'Monica', 'Hall', null),
((SELECT id FROM employee_role WHERE title='Personal Assistant'),'Jared','Dunn',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Junior Dev'),'Jian','Yang', null),
((SELECT id FROM employee_role WHERE title='CEO'),'Gavin','Belson', null);


