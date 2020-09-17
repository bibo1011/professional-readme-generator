const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add description of the project:'
        },
        {
            type: 'input',
            name: 'table of content',
            message: 'If your README is long, add table content: (optional)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide steps required to install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed:'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators and their github profile links:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose your license:'
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Choose your badges:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add guidelines on how to contribute to the project:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Write a test for the application and example on how to run them:'
        }
    ]);
};
questions()
// console.log(questions);

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


// const fs = require('fs')
// const generateMarkdown = require('./utils/generateMarkdown.js')