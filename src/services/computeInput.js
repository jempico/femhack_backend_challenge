const fs = require('fs');
let database = require('../config/db');
let jsonDB = database.jsonDB;
const resultsJson = "results.json";
const computedDataFactory = require('../model/computedDataFactory');
let computedData;
let computedDataId;

function computeInput(input) {
    let {alpha, v0} = input;

    // Creating the computedData object to be pushed into jsonDB array
    computedData = computedDataFactory(alpha, v0);

    // Reading to check if results.json file exists. 
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
        console.log('Results succesfully computed and saved in "results.json" file');
        fs.writeFileSync(resultsJson, JSON.stringify(jsonDB));
}


module.exports = computeInput;