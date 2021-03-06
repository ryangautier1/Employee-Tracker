const questions = require("./questions");
const queryHelper = require("./queryHelper");
const cTable = require('console.table');

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
        case "Add": // done
            answer = await questions.addMenu();
            handleAdd(answer.choice);
            break;
        case "View": // done
            answer = await questions.viewMenu();
            handleView(answer.choice);
            break;
        case "Update/Delete": // done
            answer = await questions.updateMenu();
            handleUpdate(answer.choice);
            break;
        case "Exit": // done
            process.exit();
    }
}

async function handleView(choice) {
    switch (choice) {
        case "View departments": // done
            // get departments here
            var departments = await queryHelper.getDepartment();
            console.table(departments)
            mainMenu();
            break;
        case "View roles": // done
            // get roles here
            var roles = await queryHelper.getRoles();
            console.table(roles)
            mainMenu();
            break;
        case "View an individual employee": // done
            // get employees here
            var employees = await queryHelper.getEmployees();
            var answer = await questions.whichEmployee(employees, "view");
            var indEmp = await queryHelper.getIndEmployee(answer);
            var indEmpRole = await queryHelper.getEmployeeAndRole(indEmp);
            console.table(indEmpRole);
            mainMenu();
            break;
        case "View employees by manager": //*** works but shows manager and roleid instead of role
            // get managers here
            var managers = await queryHelper.getManagers();
            var answer = await questions.whichManager(managers, "view employees of");
            var indManager = await queryHelper.getIndEmployee(answer);
            var employees = await queryHelper.getEmployeesByManager(indManager[0]);
            console.table(employees)
            mainMenu();
            break;
        case "View total utilized budget of a department": // ***
            // get departments here
            var answer = await questions.whichDepartment(departments, "view the budget information of")
            // add salaries together by department or something
            break;
        case "Back to main menu": // done
            mainMenu();
            break;
    }
}

async function handleAdd(choice) {
    switch (choice) {
        case "Add role": // done
            var answer = await questions.addRoleQuestions();
            await queryHelper.addRole(answer);
            console.log("Role added!");
            mainMenu();
            break;
        case "Add employee": // done
            var answer = await questions.addEmployeeQuestions();
            await queryHelper.addEmployee(answer);
            console.log("Employee added!");
            mainMenu();
            break;
        case "Add department": // done
            var answer = await questions.addDepartmentQuestions();
            await queryHelper.addDepartment(answer);
            console.log("Department added!");
            mainMenu();
            break;
        case "Back to main menu": //done
            mainMenu();
            break;
    }
}

async function handleUpdate(choice) {
    switch (choice) {
        case "Update employee role": // done
            // get roles here
            var employees = await queryHelper.getEmployees();
            var emp = await questions.whichEmployee(employees, "update");
            var indEmployee = await queryHelper.getIndEmployee(emp);
            var roles = await queryHelper.getRoles();
            var answer = await questions.whichRole(roles, "assign to this employee");
            var indRole = await queryHelper.getIndRole(answer);
            await queryHelper.updateRole(indEmployee, indRole);
            console.log("Role updated");
            mainMenu();
            break;
        case "Update employee manager": // done
            // get employees here
            var employees = await queryHelper.getEmployees();
            var managers = await queryHelper.getManagers();
            var emp = await questions.whichEmployee(employees, "update");
            var manager = await questions.whichManager(managers, "assign to this employee");
            var indEmployee = await queryHelper.getIndEmployee(emp);
            var indManager = await queryHelper.getIndEmployee(manager);
            await queryHelper.updateManager(indEmployee, indManager);
            console.log("Manager updated!");
            mainMenu();
            break;
        case "Delete department": // done
            // get departments here
            var departments = await queryHelper.getDepartment();
            var answer = await questions.whichDepartment(departments, "delete");
            var indDep = await queryHelper.getIndDepartment(answer);
            await queryHelper.deleteDepartment(indDep);
            console.log(`Deleted!`);
            mainMenu();
            break;
        case "Delete role": // done
            // get roles here
            var roles = await queryHelper.getRoles();
            var answer = await questions.whichRole(roles, "delete");
            var indRole = await queryHelper.getIndRole(answer);
            await queryHelper.deleteRole(indRole);
            console.log(`Deleted!`);
            mainMenu();
            break;
        case "Delete employee": // done
            // get employees here
            var employees = await queryHelper.getEmployees();
            var answer = await questions.whichEmployee(employees, "delete");
            var indEmp = await queryHelper.getIndEmployee(answer);
            await queryHelper.deleteEmployee(indEmp);
            console.log(`Deleted!`);
            mainMenu();
            break;
        case "Back to main menu":
            mainMenu();
            break;
    }
}