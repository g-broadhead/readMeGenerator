// Packages
// const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username.'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Enter your github repo.'
  },
  {
    type: 'input',
    name: 'title',
    message: 'A project title is needed.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: "If applicable, describe the steps required to install your project for the Installation section."
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide instructions and examples of your project in use for the Usage section."

  },
  {
    type: 'input',
    name: 'contributing',
    message: "If applicable, provide guidelines on how other developers can contribute to your project."
  },
  {
    type: 'input',
    name: 'tests',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them."
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'email',
    message: "Provide Your Email"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err)
    }

    console.log("Your README.md has been generated.")
  })
}

// function to initialize program
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);

    const markdown = generateMarkdown(userResponses)

    await writeToFile('ExampleREADME.md', markdown);
  } catch (error) {
    console.log(error)
  }
}

// function call to initialize program
init();


