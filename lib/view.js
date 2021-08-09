var mysql = require("mysql");
var server = require("../server");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Seamdart54.",
    database: "employee_management",
});
exports.viewEmployees = () => {
    const query = "SELECT "
}
exports.viewByDepartment = () => {
    connection.query = "SELECT * FROM department", function(err,result){
        if (err) throw err;
        console.log(results);
    }
}
exports.viewByManager = () => {
    connection.query = "SELECT * FROM "
}