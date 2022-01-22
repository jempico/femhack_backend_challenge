const promptManual = require('../services/promptManual');
const promptJson = require('../services/promptJSON');
 

const redirect = (answer) => {
    if(answer.command === 'Manually'){
        promptManual();      
    } 
    if(answer.command === 'JSON'){
        promptJson();   
    }
}


module.exports = redirect;