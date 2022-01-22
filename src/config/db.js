class Database {
    constructor() {
        //If there is no instance of this class, set the instance to the result of this call
        if (Database.instance == null) {
            this.jsonDB = [];  
            Database.instance = this
        } else {  
        return Database.instance
        }
    }
    
}

const database = new Database();

// To prevent this object frm being changed after being initiallized: 
Object.freeze(database);

module.exports = database;

