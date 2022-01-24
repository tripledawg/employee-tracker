//node modules
const inquirer = require('inquirer'); //for building user input prompts
const fs = require('fs');//file system to write input to file
const mysql = require('mysql2/promise');
const table = require('console.table');

//global constants

//function to start input prompts for the manager about employees

function userInit() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'method',
                message: 'What would you like to do?',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add  Role', 'Add Employee', 'Update Employee Role'],
                validate: list => {
                    if (list) {
                        return true;
                    } else {
                        console.log("Please select a choice to continue.");
                        return false;
                    }
                }
            },
        ])
        // .then((usererAnswers) => {
        //     const { name, id, email, officeNumber } = userAnswers;
        //     const manager = new Manager(name, id, email, officeNumber);
        //     teamMembers.push(manager);
        //     console.log("Welcome " + userAnswers.name + "! Now let's assemble your team.");  ///how to insert name??
        //     employeeInit();
        // });
};

//You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these.
//You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections 
//to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, 
//refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).
//WHEN view all departments => table with dept names and dept ids
//WHEN view all roles => job title,  role id, the department that role belongs to, and the salary for that role
//WHEN view all employees => formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
//WHEN add department => prompted to enter the name of the department and that department is added to the database
//WHEN add role => prompted to enter the name, salary, and department for the role and that role is added to the database
//WHEN add employee => prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
//WHEN update employee role => prompted to select an employee to update and their new role and this information is updated in the database 
userInit();