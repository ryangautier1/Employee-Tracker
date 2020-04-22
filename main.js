const questions = require("./questions");

async function init() {
    try {
        // const data = getdatafromDB
        mainMenu();
    } catch(err) {
        console.log(err);
    } 
}

init();

async function mainMenu() {
    var answer = await questions.mainMenu();
    switch (answer.choice) {
        case "Add":
            answer = await questions.addMenu();
            handleAdd();
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

async function handleAdd() {

}

async function handleUpdate() {

}