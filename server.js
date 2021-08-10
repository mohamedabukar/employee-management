const mysql = require("mysql");
const inquirer = require("inquirer");
const table= require("console.table")


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
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View departments",
                "View roles",
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
                case "View departments":
                    viewDepartments();
                    break;
                case "View roles":
                    viewRoles();
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

const viewemployees = () => {
    const query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runsearch();
    })
}
const viewDepartments = () => {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runsearch();
    })
}


const viewRoles = () => {
    const query = "SELECT title FROM employee_role";
    connection.query(query, (err, res) => {
        if (err) throw errr;
        console.table(res);
        roleTable.push(res);
        console.log(roleTable);
        runsearch();
    })
}
const addEmployee = () => {
    const query = "SELECT title FROM employee_role";
    connection.query(query, (err, res) => {
        if (err) throw errr;
        console.table(res);
        console.log(res, typeof res);

        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's first name?",
                    name: "firstName"
                },
                {
                    type: "input",
                    message: "What is the employees last name?",
                    name: "lastName"
                },
                {
                    type: "list",
                    message: "What is the employees role?",
                    name: "role",
                    choices: res.map((role, index) => {
                        let i = index + 1
                        return i + ". " + role.title;
                    })
                }
            ])
            .then(answers => {
                let roleId = answers.role.split(". ")[0]
                const query = "INSERT INTO employee SET ?";
                connection.query(query, { first_name: answers.firstName, last_name: answers.lastName, role_id: roleId }, (err, res) => {
                    if (err) throw err;
                    viewemployees();
                })
            })
    })

}
