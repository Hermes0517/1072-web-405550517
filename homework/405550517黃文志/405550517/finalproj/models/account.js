const db = require('../utils/database');
module.exports = class Account {
    constructor(id, username, password,email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // READ  
    static fetchAll() {
        return db.execute('SELECT * FROM dbdemo.account;');
    }
};