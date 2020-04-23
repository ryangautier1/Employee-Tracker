const connection = require("./connection");

// get employees
function getEmployees() {
    return connection.query("SELECT * FROM employee");
}

function getIndEmployee(answer) {
    var name = (answer.choice.split(" "));
    return connection.query("SELECT * FROM employee WHERE first_name = ? AND last_name = ?", [name[0], name[1]]);
}

function getRoles() {
    return connection.query("SELECT * FROM role");
}

function getDepartment() {
    return connection.query("SELECT * FROM department");
}

function addDepartment(answer) {
    return connection.query("INSERT INTO department (name) VALUES ?", { name: answer.name });
}

function addRole(answer) {
    return connection.query("INSERT INTO role (title, salary, department_id) VALUES ?",
    {
        title: answer.title,
        salary: answer.salary,
        department: answer.department
    });
}

function addEmployee(answer) {
    return connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?",
    {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id
    });
}

module.exports = {
    getEmployees,
    getRoles,
    getDepartment,
    addDepartment,
    addRole,
    addEmployee,
    getIndEmployee
}