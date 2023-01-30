const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    database: 'indumentaria',
    user: 'root',
    password: '',
});

module.exports = db;