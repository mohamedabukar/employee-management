const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: "employee_management",
});
connection.connect((err)) => {
    if (err) throw err;
    runsearch();
}
const runsearch = () => {
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "Waht would you like to do?",
        choices:[
            
        ]
    })
}