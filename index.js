//node modules
const inquirer = require('inquirer'); //for building user input prompts
const fs = require('fs');//file system to write input to file
const mysql = require('mysql2/promise');
//middleware

//adding SQL queries
const schemaInitialize = fs.readFileSync('./schema.sql').toString();
const seedInsert = fs.readFileSync('./seeds.sql').toString();
const viewAllDepts = fs.readFileSync('./view_all_depts.sql').toString();
const viewAllEmployees = fs.readFileSync('./view_all_employees.sql').toString();
const viewAllRoles = fs.readFileSync('./view_all_roles.sql').toString();
const getAllManagers = fs.readFileSync('./get_managers.sql').toString();
const addDeptQuery = fs.readFileSync('./add_dept.sql').toString();
const addRoleQuery = fs.readFileSync('./add_role.sql').toString();
const addEmployeeQuery = fs.readFileSync('./add_employee.sql').toString();
const updateEmployeeQuery = fs.readFileSync('./update_employee.sql').toString();


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
            console.table(departmentResults[0][1]);
            break;
        case 'View All Roles':
            let roleResults = await viewRoles();
            console.table(roleResults[0][1]);
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
        case 'Add Employee':
            let addEmployeeResults = await addEmployee();
            console.log('Added employee ' + addEmployeeResults);
            break;
        case 'Update Employee Role':
            let updateEmployeeResults = await updateEmployeeRole();
            console.log(updateEmployeeResults);
            break;
        case 'Exit':
            console.log('Bye!');
            process.exit();
    }
    await userInit();
};


const viewDepts = async () => {
    let result = connection.query(viewAllDepts);
    return result;
}

const viewRoles = async () => {
    let result = connection.query(viewAllRoles);
    return result;
}

const viewEmployees = async () => {
    let result = connection.query(viewAllEmployees);
    return result;
}

const getManagers = async () => {
    let result = connection.query(getAllManagers);
    return result;
}

const addDept = async () => {
    let answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'method',
                message: 'What is the name of the department you would like to add?'
            }
        ]);
    await connection.query(addDeptQuery, { department_name: answers.method });
    return answers.method;
}

const addRole = async () => {
    let departmentResults = await viewDepts();
    let departmentNames = [];
    departmentResults[0][1].forEach((element) => {
        departmentNames.push(element.department_name);
    });
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


const addEmployee = async () => {
    let roleResults = await viewRoles();
    let roleTitles = [];
    roleResults[0][1].forEach((element) => {
        roleTitles.push(element.title);
    });
    let managerResults = await getManagers();
    let managerNames = [];
    managerResults[0][1].forEach((element) => {
        managerNames.push(element.first_name + ' ' + element.last_name);
    });
    let answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'fname',
                message: 'What is the first name of the employee you would like to add?',
            },
            {
                type: 'input',
                name: 'lname',
                message: 'What is the last name of the employee you would like to add?',
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
                choices: roleTitles
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Who is the employee\'s manager?',
                choices: managerNames
            }
        ]);
    let managerFirstLast = answers.manager.split(" ");
    let values = [answers.fname, answers.lname, answers.role, managerFirstLast[0], managerFirstLast[1]];
    await connection.query(addEmployeeQuery, values);
    return answers.fname + ' ' + answers.lname;
}

const updateEmployeeRole = async () => {
    let employeeResults = await viewEmployees();
    let employeeNames = [];
    employeeResults[0][1].forEach((element) => {
        employeeNames.push(element.first_name + ' ' + element.last_name);
    });
    let roleResults = await viewRoles();
    let roleTitles = [];
    roleResults[0][1].forEach((element) => {
        roleTitles.push(element.title);
    });
    let answers = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'fullName',
                message: 'Which employee\'s role do you want to update?',
                choices: employeeNames
            },
            {
                type: 'list',
                name: 'title',
                message: 'What role would you like to assign to the selected employee?',
                choices: roleTitles
            },
        ]);
    let employeeFirstLast = answers.fullName.split(" ");
    let values = [answers.title, employeeFirstLast[0], employeeFirstLast[1]];
    await connection.query(updateEmployeeQuery, values);
    return answers.fullName + ' role updated to ' + answers.title;
}

main();