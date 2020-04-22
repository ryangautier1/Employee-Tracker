const connection = require("./connection");

function getEmployees() {
    return connection.query("SELECT * FROM employee")
}

function getRoles() {
    return connection.query("SELECT * FROM role",
}

function getDepartment() {
    return connection.query("SELECT * FROM department")
}

function addDepartment(name) {
    return connection.query(`INSERT INTO department (name)
    VALUES (${name})`);
}

function addRole(title, salary, department) {
    return connection.query(`INSERT INTO role (title, salary, department_id)
    VALUES (${title}, ${salary}, ${department})`);
}

function addEmployee(first_name, last_name, role_id, manager_id) {
    return connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (${first_name}, ${last_name}, ${role_id}, ${manager_id})`);
}