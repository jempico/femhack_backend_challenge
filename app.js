const inquirer = require('inquirer');
const redirect = require('./src/controller/controller');

const startApp = () => {

    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the format in which you want to introduce the input or Exit',
            name: 'command',
            choices: [
                'Manually',
                'JSON',
                'Exit'
            ]
        }
    ]).then(answer => {
        redirect(answer);
    }).catch((err) => { throw err });
}; 

startApp();

