const inquirer = require('inquirer');

function promptExit() {
    var questions = [ ];
    inquirer.prompt(questions).then(() => {
      console.log('Bye!');
    });
  }

  module.exports = promptExit;