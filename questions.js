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

function addMenu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to add?",
            choices: ["Add department",
                "Add role",
                "Add employee"]
        }
    ])
}

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
                "View total utilized budget of a department"]
        }
    ])
}
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
                ""
            ]
        }
    ])
}