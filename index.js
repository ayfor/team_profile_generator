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

const selectTeamMemberQuestion = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMemberType',
        choices: ['Engineer', 'Intern','[FINISH]']

    }
]

const promptTeamManagerQuestions = () => {return inquirer.prompt(startupQuestions);}

const promptTeamBuilderQuestions = () => {return inquirer.prompt(selectTeamMemberQuestion);}

const addEngineer = () => {
    //Prompt questions
    //Create Object
    console.log("Adding Engineer...")
}

const addIntern = () => {
    //Prompt questions
    //Create Object
    console.log("Adding Intern...")
}

const addTeamMembers = () => {
    //Prompt for team building loop to add members to team array
    promptTeamBuilderQuestions()
    .then(
        (answer) => {
            if(answer.teamMemberType === 'Engineer'){
                addEngineer();
                addTeamMembers();
            }else if(answer.teamMemberType === 'Intern'){
                addIntern();
                addTeamMembers();
            }else{
                return;
            }
        }
    )
}


function init() {
    
    // promptTeamBuilderQuestions()
    //     .then((answers)=>writeToFile('README.md',htmlGenerator(answers)))
    //     .then(()=>console.log("Successfully Generated README file!"))
    //     .catch((err)=> console.log(err));

    promptTeamManagerQuestions()
        .then(
            (answers)=>{
                teamArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
                console.log(teamArray);
            }
        )
        .then(
            () => {addTeamMembers();}
        )
        // .then(
        //     //Generate HTML based on team array

        // )
        
}

// Function call to initialize app
init();