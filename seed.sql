USE employee_management;

INSERT INTO department(name)
VALUES
('IT'), 
('Accounting'),
('Marketing');

INSERT INTO employee_role
(title, salary, department_id)
VALUES
('Engineer', 50000, 1),
('IT Manager', 60000, 1),
('Accountant', 70000, 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Ben', 'Ben', 1, 2),
('Tin', 'Tin', 2, NULL)

