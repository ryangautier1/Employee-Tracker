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
            break;
    }
}

async function handleView(choice) {
    switch (choice) {
        case "View departments":
            // get departments here
            console.table(departments)
            mainMenu();
            break;
        case "View roles":
            // get roles here
            console.table(roles)
            mainMenu();
            break;
        case "View an individual employee":
            // get employees here
            var answer = whichEmployee(employees, "view");
            // get individual employee here
            console.table(indEmployee)
            mainMenu();
            break;
        case "View employees by manager":
            // get managers here
            var answer = whichManager(managers, "view employees of");
            // get results here
            console.table(resutls)
            mainMenu();
            break;
        case "View total utilized budget of a department":
            // get departments here
            var answer = whichDepartment(departments, "view the budget information of")
            // add salaries together by department or something
            break;
        case "Back to main menu":
            mainMenu();
            break;
    }
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
            var answer = questions.whichManager(managers, "update");
            break;
        case "Delete department":
            // get departments here
            // var departments =
            var answer = questions.whichDepartment(departments, "delete");
            break;
        case "Delete role":
            // get roles here
            // var roles = 
            var answer = questions.whichRole(roles, "delete");
            break;
        case "Delete employee":
            // get employees here
            // var employees = 
            var answer = questions.whichEmployee(employees, "delete");
            break;
        case "Back to main menu":
            mainMenu();
            break;
    }
}