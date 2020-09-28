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
    //Project languages
    {
        type: 'checkbox',
        name: 'projectLanguages',
        message: "Select all tools used:",
        choices: [
            {
                name: 'HTML',
            },
            {
                name: 'CSS',
            },
            {
                name: 'Bootstrap',
            },
            {
                name: 'Node.js',
            },
            {
                name: 'jquery',
            },
        ]
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
        message: 'Please list all contributors (First & Last Name):'
    },
    // Project Tests
    {
        type: 'input',
        name: 'projectTests',
        message: "Please enter testing details:"
    },
    //Project Questions
    {
        type: 'input',
        name: 'projectUserName',
        message: 'Please enter your first and last name:'
    },
    {
        type: 'input',
        name: 'projectGithubUN',
        message: 'Please enter your github username:'
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Please enter your email address:'
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) throw err;
        console.log("File Created!")
    })
}

// function to initialize program
const init = () => {
    return inquirer.prompt(questions)
}

// function call to initialize program
init()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(markdown => {
        writeToFile(markdown)
    })