const MYSQL = require('mysql2');

const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'filmsAdmin',
    password: 'films1234',
    database: 'neflis',
});

module.exports = CONN;