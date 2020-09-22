const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');

// array of questions for user
// const questions = [

// ];
const questions = README => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter project installation instructions:'
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
            type: 'checkbox',
            name: 'license',
            message: 'Choose your license:',
            choices: [
                'GNU_AGPLv3', 
                'GNU_GPLv3', 
                'GNU_LGPLv3', 
                'Mozilla_Public_License 2.0', 
                'Apache_License_2.0', 
                'MIT_License', 
                'Boost_Software_License_1.0', 
                'The_Unlicense'
            ],
            //add license notice (trophy)
        },
        // add badges for license from https://shields.io/
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter guidelines on how to contribute to the project:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Write a test for the application and example on how to run them:'
        },

        // Contact Info
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your Github Username!');
                  return false;
                }
              }
            // add a link of github profile
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address:'
            // add instructions on how to reach for additional questions
        }

    ])
    
};


// function to write README file
// function writeToFile(fileName, data) {
// }

const writeREADME = READMEfile => 
fs.writeFile('README.md', READMEfile, err => {
    if (err) throw err;
    console.log('README created! Check out README.md in this directory to see it!');
})

// // function to initialize program
// function init() {

// }

questions()
    .then(README => {
        return generateMarkdown(README)
    })
    .then(README =>{
        return writeREADME(README)
    })

// // function call to initialize program
// init();

