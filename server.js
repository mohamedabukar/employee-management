const mysql = require("mysql");
const inquirer = require("inquirer");
const add = require("./lib/add");
const remove = require("./lib/remove");
const update = require("./lib/update")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'Seamdart54.',
    database: "employee_management",
});
connection.connect((err) => {
    if (err) throw err;
    runsearch();
})
const runsearch = () => {
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices:[
            "View all employees",
            "View employees by department",
            "View employees by manager",
            "Add Employee",
            "Remove Employee",
            "Update employee role",
            "Update employee manager"
        ]
    })
    .then((answer) => {
        switch (answer.action) {
            case "View all employees":
                viewemployees();
                break;
            case "View employees by department":
                viewByDepartment();
                break;
            case "View employees by manager":
                viewByManager();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update employee role":
                updateRoles();
                break;
            
            case "Update employee manager":
                updateManager();
                break;
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
            
    })
}
