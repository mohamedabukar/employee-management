var inquirer = require("inquirer");
var mysql = require("mysql");
var server = require("../server")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'Seamdart54.',
    database: "employee_management",
});
 exports.addEmployee = () => {
     inquirer
     .prompt([
         {
            type:"input",
            name: "firstName",
            message: "What is the employees first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "employeeRole",
            message: "What is the employee's role?"
        }]
     )
     .then((answer) => {
         
     })
    }
     
     
         
     
     
 }