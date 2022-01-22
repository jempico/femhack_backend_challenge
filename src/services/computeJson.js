const fs = require('fs');
let database = require('../config/db');
let jsonDB = database.jsonDB;
const resultsJson = "results.json";
let computedData;
let computedDataId;

const computedDataFactory = require('../model/computedDataFactory');

function computeJson() {
    try {
    // Reading input.json file
    const data = JSON.parse(fs.readFileSync('input.json', 'utf8'))
    
    // Creating the computedData object to be pushed into jsonDB array
    data.input.forEach(obj => {
        computedData = computedDataFactory(obj.alpha, obj.v0);
        try {
            // this helps to mantain the same copy of the file to keep adding objects to the array
            jsonDB = JSON.parse(fs.readFileSync(resultsJson));
            // this allows to increase the ID by one everytime a new item is added to the array
            computedDataId = jsonDB[jsonDB.length - 1].id + 1;
            computedData.setId(computedDataId);
        } catch (error) {
            // console.log(error);
        }
        //Save results to a file
        jsonDB.push(computedData);
        fs.writeFileSync(resultsJson, JSON.stringify(jsonDB));        
    })
    console.log('Results succesfully computed and saved in "results.json" file');
    } catch (error) {
    console.log(error); 
    }  
}


module.exports = computeJson;