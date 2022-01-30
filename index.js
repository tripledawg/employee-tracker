//node modules
const inquirer = require('inquirer'); //for building user input prompts
const fs = require('fs');//file system to write input to file
const mysql = require('mysql2/promise');
//middleware
const table = require('console.table');//displays tables in a user friendly manner on command line 
//adding SQL queries
// const addDept = require('add_dept.sql');
// const addEmployee = require('add_employee.sql');
// const addRole = require('add_role.sql');
// const updateEmployee = require('update_employee.sql');
// const viewAllDepts = require('view_all_depts.sql');
// const viewAllEmployees = require('view_all_employees.sql');
// const viewAllRoles = require('view_all_roles');
const schemaInitialize = fs.readFileSync('./schema.sql').toString();
const seedInsert = fs.readFileSync('./seeds.sql').toString();
const viewAllDepts = fs.readFileSync('./view_all_depts.sql').toString();
const viewAllEmployees = fs.readFileSync('./view_all_employees.sql').toString();
const viewAllRoles = fs.readFileSync('./view_all_roles').toString();


//function to start input prompts for the manager about employees
var connection;
async function main() {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'CqK4ylt2p3',
        multipleStatements: 'true'  //so I can run schema and seed queries all at once
    });
    let results1 = await connection.query(schemaInitialize);
    let results2 = await connection.query(seedInsert);
    userInit();
}

function userInit() {
    inquirer
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
            },
        ]).then(choices => {
            console.log('You selected to ' = choices.method);
            if(choices.method == 'View All Employees'') {
                console.log('You chose to ' = choices.methid);
                let results
            }
        }
};

const viewDepts = async () => {  //const or function?
    const result = await fetch(viewAllDepts, {
        method: 'GET',
    });
}

const viewRoles = async () => {
    const result = await fetch(viewAllRoles, {
        method: 'GET',
    });
}

const viewEmployees = async () => {
    const result = await fetch(viewAllEmployees, {
        method: 'GET',
    });
}
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

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'method',
                message: 'What is the name of the role you would like to add?',
            },
            {
                type: 'input',
                name: 'method',
                message: 'What is the salary of the role?',
            },
            {
                type: 'list',
                name: 'method',
                message: 'What department does the role belong to?',
                choices: ['Paper Solutions', 'Software Solutions'],
            },
        ])
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'method',
                message: 'What is the first name of the employee you would like to add?',
            },
            {
                type: 'input',
                name: 'method',
                message: 'What is the last name of the employee you would like to add?',
            },
            {
                type: 'list',
                name: 'method',
                message: 'What is the role of the employee?',
            },
            {
                type: 'list',
                name: 'method',
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


//A constructor function or class could be helpful for organizing these.
//You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections 
//to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, 
//refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

userInit();