const questions = require("./questions");

async function init() {
    try {
        // const data = getdatafromDB
        mainMenu();
    } catch (err) {
        console.log(err);
    }
}

init();

async function mainMenu() {
    var answer = await questions.mainMenu();
    switch (answer.choice) {
        case "Add":
            answer = await questions.addMenu();
            handleAdd(answer.choice);
            break;
        case "View":
            answer = await questions.viewMenu();
            handleView(answer.choice);
            break;
        case "Update/Delete":
            answer = await questions.updateMenu();
            handleUpdate(answer.choice);
            break;
        case "Exit":
            // code
            break;
    }
}

async function handleView() {

}

async function handleAdd(choice) {
    switch (choice) {
        case "Add role":
            var answer = questions.addRoleQuestions();
            break;
        case "Add employee":
            var answer = questions.addEmployeeQuestions();
            break;
        case "Add department":
            var answer = questions.addDepartmentQuestions();
            break;
        case "Back to main menu":
            mainMenu();
            break;
    }
}

async function handleUpdate(choice) {
    switch (choice) {
        case "Update employee role":
            // get roles here
            // var roles = 
            var answer = questions.whichRole(roles, "update");
            break;
        case "Update employee manager":
            // get managers here
            // var managers = 
            var answer = questions.whichManager(managers);
            break;
        case "Delete department":
            // get departments here
            // var departments =
            var answer = questions.whichDepartment();
            break;
        case "Delete role":
            // get roles here
            // var roles = 
            var answer = questions.whichRole(roles, "delete");
            break;
        case "Delete employee":
            // get employees here
            // var employees = 
            var answer = questions.whichEmployee(employees);
            break;
        case "Back to main menu":
            mainMenu();
            break;
    }
}