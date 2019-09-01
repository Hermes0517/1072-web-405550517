const mysql = require('mysql2');

const pool = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    database: 'dbdemo',  
    password: 'Pxpx210070'
});

module.exports = pool.promise();