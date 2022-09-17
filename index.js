// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
const genHtmlCard = require('./dist/generateHTML.js');
let fileContents = '';
// TODO: Create an array of questions for user input
const managerQ = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'fname',
    },
    {
        type: 'input',
        message: 'What is the team managers Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team managers Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'offNum',
    },
    {
        type: 'list',
        message: 'Would you like to add anyone else to the team?',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
];
const internQ = [
    {
        type: 'input',
        message: 'What is the team Interns name?',
        name: 'fname',
    },
    {
        type: 'input',
        message: 'What is the team Interns Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team Interns Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team Interns school?',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Would you like to add anyone else to the team?',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
];
const engineerQ = [
    {
        type: 'input',
        message: 'What is the team Engineers name?',
        name: 'fname',
    },
    {
        type: 'input',
        message: 'What is the team Engineers Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team Engineers Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team Engineers Github?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Would you like to add anyone else to the team?',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    //write data to file here.
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(managerQ)
        .then((response) => {
            const management = new Manager(response.offNum, response.fname, response.id, response.email)
            console.log(management);
            console.log(management.getRole());
            if (response.choice === "Intern") {
                //do something here
                //console.log("I am Intern")
                funIntern();
            }
            else if (response.choice === "Engineer") {
                //console.log("I am Engineer")
                funEngineer();
            } else {
                //finish HTML
                console.log("finish HTML");
                end();
            }
            
            fileContents = genHtmlCard(management);
            
            writeToFile("./dist/index.html", fileContents);//finish writing html file
            console.log(fileContents);

        })
}

function funIntern() {
    inquirer
        .prompt(internQ)
        .then((response) => {
            const intern = new Intern(response.school, response.fname, response.id, response.email)
            console.log(intern);
            if (response.choice === "Intern") {
                //do something here
                //console.log("I am Intern")
                funIntern();
            }
            else if (response.choice === "Engineer") {
                //console.log("I am Engineer")
                funEngineer();
            } else {
                //finish HTML
                console.log("finish HTML")
                end();
            }
            fileContents = genHtmlCard(intern);
            writeToFile("./dist/index.html", fileContents);
            //console.log(fileContents);

        })
}

function funEngineer() {
    inquirer
        .prompt(engineerQ)
        .then((response) => {
            const engineer = new Engineer(response.github, response.fname, response.id, response.email)
            console.log(engineer);
            if (response.choice === "Intern") {
                //do something here
                console.log("I am Intern")
                funIntern();
            }
            else if (response.choice === "Engineer") {
                console.log("I am Engineer")
                funEngineer();
            } else {
                //finish HTML
                console.log("finish HTML")
                end();
            }
            fileContents = genHtmlCard(engineer);
            writeToFile("./dist/index.html", fileContents);
            //console.log(fileContents);

        })
}

function end(){
    fileContents = '</body></html>';
    writeToFile("./dist/index.html", fileContents);
}


// Function call to initialize app
init();
