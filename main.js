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
        break;
        case "View":
            answer = await questions.viewMenu();
        break;
        case "Update/Delete":
            answer = await questions.updateMenu();
        break;
        case "Exit":
            // code
        break;
    }
}