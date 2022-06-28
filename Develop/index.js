// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")
const generateMarkdown  = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name:'title',
    message:'what is your project title name?'},
    {type:'input',
    name:'description',
    message:'what is the descrition of your project?'},
    {
    type:'input',
    name:'installation',
    message:'what dependncies did you use for your project?'
    },
    {type:'input',
    name:'usage',
    message:'how to use your project app?'},
    {type:'confirm',
    name:'license',
    message:'do you use any license?'},
    {
        type:'input',
    name:'licenses',
    message:'which license do you use for your project?'
    },
    {type:'input',
    name:'contributors',
    message:'who is the cntributors for your project?'},
    {type:'input',
    name:'test',
    message:'did you test your project?'},
    {type:'input',
    name:'github',
    message:'what is your github username?'},
    {type:'input',
    name:'email',
    message:'what is your email address?'}
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    readme = generateMarkdown(data);
    fs.writeFile(fileName,readme,err =>{
        if(err){
            console.log(err);
            return;
        } else {
            console.log('successfully created readme file')
        }

    })
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
        Initialize New ReadMe file
    `);
    return inquirer.prompt(questions)
        .then(answersData =>{
            writeToFile('./src/readme.md', answersData);
        }).catch(err => {
            console.log(err);
        });
    }
// Function call to initialize app
init();
