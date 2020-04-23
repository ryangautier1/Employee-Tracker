const connection = require("./connection");

// READ
function getEmployees() {
    return connection.query("SELECT * FROM employee");
}

function getEmployeesByManager(input) {
    return connection.query("SELECT * FROM employee WHERE manager_id = ?", [input.manager_id]);
}

function getIndEmployee(answer) {
    var name = (answer.choice.split(" "));
    return connection.query("SELECT * FROM employee WHERE first_name = ? AND last_name = ?", [name[0], name[1]]);
}

function getRoles() {
    return connection.query("SELECT * FROM role");
}

function getManagers() {
    return connection.query("SELECT * FROM employee WHERE role_id = 1");
}

function getManagerId(manager) {
    return connection.query("SELECT * FROM employee WHERE ?", {manager_id: manager.manager_id})
}

function getDepartment() {
    return connection.query("SELECT * FROM department");
}

// CREATE
function addDepartment(answer) {
    return connection.query("INSERT INTO department SET ?", { name: answer.name });
}

function addRole(answer) {
    return connection.query("INSERT INTO role SET ?",
    [{
        title: answer.title,
        salary: answer.salary,
        department_id: answer.department_id
    }]);
}

function addEmployee(answer) {
    return connection.query("INSERT INTO employee SET ?",
    {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id
    });
}

// DELETE/UPDATE
function updateManager(emp, manager) {
    return connection.query("UPDATE employee SET ? WHERE ?",
    [
        {
            manager_id : manager.manager_id
        },
        {
            id: emp.id
        }
    ]);
}

function deleteDepartment(department) {
    return connection.query("DELETE FROM department WHERE ?", {id: department.id});
}

function deleteRole(input) {
    return connection.query("DELETE FROM role WHERE ?", {id: input.id});
}

module.exports = {
    getEmployees,
    getRoles,
    getDepartment,
    getManagers,
    addDepartment,
    addRole,
    addEmployee,
    getIndEmployee,
    getManagerId,
    getEmployeesByManager,
    updateManager,
    deleteDepartment,
    deleteRole
}