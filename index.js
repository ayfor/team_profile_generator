// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
];

const selectTeamMemberQuestion = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMemberType',
        choices: ['Engineer', 'Intern','[FINISH]']

    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
        },
        {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
        },
        {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        },
        {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithubUsername',
        }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the interns's name?",
        name: 'internName',
        },
        {
        type: 'input',
        message: "What is the interns's employee ID?",
        name: 'internId',
        },
        {
        type: 'input',
        message: "What is the interns's email address?",
        name: 'internEmail',
        },
        {
        type: 'input',
        message: "What is the interns's school name?",
        name: 'internSchoolName',
        }
];

const promptTeamManagerQuestions = () => {return inquirer.prompt(startupQuestions);}

const promptTeamBuilderQuestions = () => {return inquirer.prompt(selectTeamMemberQuestion);}

const addEngineer = () => {
    console.log("Adding Engineer...")
    //Prompt questions
    inquirer.prompt(engineerQuestions)
    .then(
        (answers)=>{
            teamArray.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithubUsername));
            console.log(teamArray);
        }
    )
    .then(
        ()=>{addTeamMembers();}
    )
    
    
}

const addIntern = () => {
    console.log("Adding Intern...")
    //Prompt questions
    inquirer.prompt(internQuestions)
    .then(
        (answers)=>{
            teamArray.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchoolName));
            console.log(teamArray);
        }
    )
    .then(
        ()=>{addTeamMembers();}
    )
}

const addTeamMembers = () => {
    //Prompt for team building loop to add members to team array
    promptTeamBuilderQuestions()
    .then(
        (answer) => {
            if(answer.teamMemberType === 'Engineer'){
                addEngineer();
                
            }else if(answer.teamMemberType === 'Intern'){
                addIntern();
                
            }else{
                return;
            }
        }
    )
}


function init() {
    promptTeamManagerQuestions()
        .then(
            //To create a team, first add the team manager
            (answers)=>{
                teamArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
                console.log(teamArray);
            }
        )
        .then(
            () => {
                //Add team members
                addTeamMembers();
            }
        )
        .then(
            //Generate HTML based on team array
            () => {
                console.log("Generating HTML...");
                writeToFile('./dist/teamProfile.html', )
            }
            
        )
        .catch(
            (err) => console.error(err)
        )
        
}

// Function call to initialize app
init();