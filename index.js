//node modules
const inquirer = require('inquirer'); //for building user input prompts
const fs = require('fs');//file system to write input to file
const mysql = require('mysql2/promise');
//middleware
// const table = require('console.table');//displays tables in a user friendly manner on command line 
//adding SQL queries

const schemaInitialize = fs.readFileSync('./schema.sql').toString();
const seedInsert = fs.readFileSync('./seeds.sql').toString();
const viewAllDepts = fs.readFileSync('./view_all_depts.sql').toString();
const viewAllEmployees = fs.readFileSync('./view_all_employees.sql').toString();
const viewAllRoles = fs.readFileSync('./view_all_roles').toString();
const addDeptQuery = fs.readFileSync('./add_dept_.sql').toString();
const addRoleQuery = fs.readFileSync('./add_role.sql').toString();
const addEmployeeQuery = fs.readFileSync('./add_employee.sql').toString();
const updateEmployee = fs.readFileSync('./update_employee.sql').toString();


//function to start input prompts for the manager about employees
var connection;
async function main() {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'CqK4ylt2p3',
        multipleStatements: 'true'  //so I can run schema and seed queries all at once
    });
    await connection.query(schemaInitialize);
    await connection.query(seedInsert);
    userInit();
}

const userInit = async () => {
    let answers = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'method',
                message: 'What would you like to do?',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit'],
                validate: list => {
                    if (list) {
                        return true;
                    } else {
                        console.log("Please select a choice to continue.");
                        return false;
                    }
                }
            }
        ]);
    console.log('You chose to ' + answers.method);
    switch (answers.method) {
        case 'View All Departments':
            let departmentResults = await viewDepts();
            console.log(departmentResults[0][1]);
            console.table(departmentResults[0][1]);
            break;
        case 'View All Employees':
            let employeeResults = await viewEmployees();
            console.table(employeeResults[0][1]);
            break;
        case 'Add Department':
            let addDepartmentResults = await addDept();
            console.log('Added department ' + addDepartmentResults);
            break;
        case 'Add Role':
            let addRoleResults = await addRole();
            console.log('Added role ' + addRoleResults);
            break;
        case 'Exit':
            console.log('Bye!');
            process.exit();
    }
    await userInit();
};


const viewDepts = async () => {
    let result = await connection.query(viewAllDepts);
    return result;
};
const viewRoles = async () => {
    let result = await connection.query(viewAllRoles);
    return result;
};
const viewEmployees = async () => {
    let result = await connection.query(viewAllEmployees);
    return result;
};

function addDept() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'method',
                message: 'What is the name of the department you would like to add?',
            },
        ])
}

const addRole = async () => {
    let departmentResults = await viewDepts();
    let departmentNames = [];
    departmentResults.forEach((element) => {
        departmentNames.push(element.department_name);
    })
    let answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role you would like to add?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?',
            },
            {
                type: 'list',
                name: 'department',
                message: 'What department does the role belong to?',
                choices: departmentNames
            },
        ]);
    let values = [answers.roleName, answers.salary, answers.department];
    await connection.query(addRoleQuery, values);
    return answers.roleName;
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the first name of the employee you would like to add?',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the last name of the employee you would like to add?',
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Who is the employee\'s manager?',
                choices: ['Michael Scott', 'Monical Hall']
            },
        ])
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'method',
                message: 'Which employee\'s role do you want to update?',
            },
            {
                type: 'input',
                name: 'method',
                message: 'What role would you like to assign to the selected employee?',
                choices: ['Sales', 'Customer Service', 'Temp', 'Accountant', 'Warehousing', 'Manager', 'HR', 'Engineer', 'junior dev', 'CEO', 'Incubator', 'Personal Assistant'],
            },
        ])
}

main();