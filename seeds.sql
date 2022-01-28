INSERT INTO department (department_name)
VALUES ('Paper Services'),
        ('Software Services');
  

INSERT INTO employee_role (title, salary, department_id)
VALUES ('Paper Sales', 55000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Paper Customer Service', 55000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Paper Temp', 25000, (SELECT id FROM department WHERE department_name='Paper Services')),
('Paper Accountant', 55000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Paper Warehousing', 45000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Paper Manager', 60000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Paper HR Rep', 50000,(SELECT id FROM department WHERE department_name='Paper Services')),
('Software Manager', 130000, (SELECT id FROM department WHERE department_name='Software Services')),
('Software Engineer', 85000, (SELECT id FROM department WHERE department_name='Software Services')),
('Software Junior Dev', 65000, (SELECT id FROM department WHERE department_name='Software Services')),
('Software CEO', 150000, (SELECT id FROM department WHERE department_name='Software Services')),
('Software Incubator', 150000, (SELECT id FROM department WHERE department_name='Software Services')),
('Software Personal Assistant', 150000, (SELECT id FROM department WHERE department_name='Software Services'));

INSERT INTO employee (employee_role_id, first_name, last_name, manager_id)
VALUES ((SELECT id FROM employee_role WHERE title='Paper Sales'),'Dwight', 'Schrute', (SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Sales'),'Jim', 'Halpert',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Accountant'),'Oscar', 'Martinez',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Warehousing'),'Darryl', 'Philbin',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Accountant'),'Angela', 'Martin',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper HR Rep'),'Toby','Flenderson',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Temp'),'Ryan','Howard',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott'),
((SELECT id FROM employee_role WHERE title='Paper Customer Service'),'Kelly', 'Kapoor',(SELECT id FROM employee WHERE first_name='Michael' AND last_name='Scott')),
((SELECT id FROM employee_role WHERE title='Paper Manager'),'Michael', 'Scott', NULL),
((SELECT id FROM employee_role WHERE title='Software Incubator'),'Erlich', 'Bachman',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Software Engineer'),'Richard', 'Hendricks',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Software Engineer'),'Dinesh', 'Chugtai',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Software Engineer'),'Bertram', 'Gilfoyle',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Software Manager'),'Monica', 'Hall', null),
((SELECT id FROM employee_role WHERE title='Software Personal Assistant'),'Jared', 'Dunn',(SELECT id FROM employee WHERE first_name='Monica' AND last_name='Hall')),
((SELECT id FROM employee_role WHERE title='Software Junior Dev'),'Jian', 'Yang', null),
((SELECT id FROM employee_role WHERE title='Software CEO'),'Gavin', 'Belson', null);


