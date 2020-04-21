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
    const answer = await questions.mainMenu();
    switch (answer) {
        case "Add":
            // code
        break;
        case "View":
            // code
        break;
        case "Update":
            // code
        break;
        case "Exit":
            // code
        break;
    }
}