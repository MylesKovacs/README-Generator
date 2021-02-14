const fs = require('fs');
const inquirer = require('inquirer');

const promptQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project titled? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: descriptionInput => {
          if descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'What steps are required to install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What uses does this application have?'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who worked with you on this? (If just you, leave blank)'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license describes your project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla PL 2.0', 'Apache License 2', 'MIT', 'Boost', 'Unilicense']
      }
    ]);
  };

  promptQuestions()