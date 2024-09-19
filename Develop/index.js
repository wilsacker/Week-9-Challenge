// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a short description of your project:' },
    { type: 'input', name: 'installation', message: 'How do you install your project?' },
    { type: 'input', name: 'usage', message: 'Provide instructions for using the project:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
    { type: 'input', name: 'contributing', message: 'How can others contribute to your project?' },
    { type: 'input', name: 'tests', message: 'How can users run tests?' },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
