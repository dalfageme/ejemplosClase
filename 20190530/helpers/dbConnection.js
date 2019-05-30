const MYSQL = require('mysql2');

// Crear la conexión con la BBDD
const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'filmsAdmin',
    password: 'films1234',
    database: 'neflis',
});

module.exports = CONN;