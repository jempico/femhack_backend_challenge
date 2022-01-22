const inquirer = require('inquirer');
const computeJson = require('./computeJson');

function promptJson() {
    var questions = [
      {
        type: 'confirm',
        name: 'jsonInput',
        message: 'Please check that an "input.json" file exists in the root directory. Type Y once done',
      }
    ];
    
    inquirer.prompt(questions).then(() => {
        computeJson();
    });
  }


module.exports = promptJson;