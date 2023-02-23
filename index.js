// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Write a description of your project', 'What are the installation instructions for your prject?', 'What is the usage information about your project?', 'Who contributed to your project?', 'What are the test instructions for your project?', 'What is your Github username?', 'What is your email?', 'What is the best way to contact you for questions?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log('err') : console.log('success'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contact'
        },
        {
            type: 'checkbox',
            message: 'Which liscence do you want to choose?',
            name: 'license',
            choice: ['MIT', 'BSD', 'GPL',]
        },
    ])
    .then((data) => {
        console.log(data);
        writeToFile('README.md', data)
    });
}

// Function call to initialize app
init();
