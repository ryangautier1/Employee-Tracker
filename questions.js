const inquirer = require("inquirer");

function mainMenu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would action would you like to take?",
            choices: ["Add",
                "View",
                "Update/Delete",
                "Exit"]
        }
    ])
}

// Add Questions
function addMenu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to add?",
            choices: ["Add department",
                "Add role",
                "Add employee",
                "Back to main menu"]
        }
    ])
}

function addRoleQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the title of the role:",
            name: "title"
        },
        {
            type: "input",
            message: "Enter the salary of the role:",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter the department ID:",
            name: "department_id"
        }
    ])
}

function addEmployeeQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the first name of the employee:",
            name: "first_name"
        },
        {
            type: "input",
            message: "Enter the last name of the employee:",
            name: "last_name"
        },
        {
            type: "input",
            message: "Enter the role ID:",
            name: "role_id"
        },
        {
            type: "input",
            message: "Enter the manager ID:",
            name: "manager_id"
        }
    ])
}

function addDepartmentQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the name of the department:",
            name: "name"
        }
    ])
}

// View Questions
function viewMenu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to view?",
            choices: ["View departments",
                "View roles",
                "View an individual employee",
                "View employees by manager",
                "View total utilized budget of a department",
                "Back to main menu"]
        }
    ])
}

// Update Questions
function updateMenu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to update?",
            choices: ["Update employee role",
                "Update employee manager",
                "Delete department",
                "Delete role",
                "Delete employee",
                "Back to main menu"
            ]
        }
    ])
}

function whichRole(roles, action) {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: `Which role would you like to ${action}?`,
            choices: [roles]
        }
    ])
}

function whichManager(managers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which manager would you like to update?",
            choices: [managers]
        }
    ])
}

function whichDepartment(departments) {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which department would you like to delete?",
            choices: [departments]
        }
    ])
}

function whichEmployee(employees) {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which employee would you like to delete?",
            choices: [employees]
        }
    ])
}

module.exports = {
    mainMenu,
    addMenu,
    viewMenu,
    updateMenu,
    addRoleQuestions,
    addEmployeeQuestions,
    addDepartmentQuestions,
    whichRole,
    whichManager,
    whichDepartment,
    whichEmployee
}