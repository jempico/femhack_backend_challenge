const inquirer = require('inquirer');
const computeInput = require('./computeInput');

function promptManual() {
    var questions = [
      {
        type: 'number',
        name: 'alpha',
        message: 'Launch angle (alpha)',
      },
      {
        type: 'number',
        name: 'v0',
        message: 'Initial velocity (v0)'
      }
    ];
    
    inquirer.prompt(questions).then((answers) => {
        computeInput(answers);
    })
  }


module.exports = promptManual;