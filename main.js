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
            handleView();
            break;
        case "Update/Delete":
            answer = await questions.updateMenu();
            handleUpdate();
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

async function handleUpdate() {

}