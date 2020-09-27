const fs = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of this project?'
    },
    // Project Description
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description of the project:'
    },
    // Project Installation
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please enter the steps to install your project:'
    },
    // Project Usage
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please enter the usage details:'
    },
    // Project License
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Please select a license type:',
        choices: ['MIT License', 'Apache License', "GPL License"]
    },
    // Project Contribution
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Please list all contributors i.e("user name", "github userid", email address) '
    },
    // Project Tests
    {
        type: 'input',
        name: 'projectTests',
        message: "Please enter testing details"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = () => {
    return inquirer.prompt(questions)
}

// function call to initialize program
init()
    .then(data => console.log(data))
    .then(generateMarkdown(data))
    .then(markdown => console.log(markdown))