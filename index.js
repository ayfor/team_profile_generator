// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');

//const htmlGenerator = 

let teamArray = [];

const writeToFile  = util.promisify(fs.writeFile);

const startupQuestions = [
    {
    type: 'input',
    message: "What is the team manager's name?",
    name: 'managerName',
    },
    {
    type: 'input',
    message: "What is the team manager's employee ID?",
    name: 'managerId',
    },
    {
    type: 'input',
    message: "What is the team manager's email address?",
    name: 'managerEmail',
    },
    {
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'managerOfficeNumber',
    }
]

const promptTeamBuilderQuestions = () => {return inquirer.prompt(startupQuestions);}

function init() {
    
    // promptTeamBuilderQuestions()
    //     .then((answers)=>writeToFile('README.md',htmlGenerator(answers)))
    //     .then(()=>console.log("Successfully Generated README file!"))
    //     .catch((err)=> console.log(err));

    promptTeamBuilderQuestions()
        .then(
            (answers)=>{
                teamArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
                console.log(teamArray);
            }
        )
}

// Function call to initialize app
init();