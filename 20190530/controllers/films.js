const CONN = require('../helpers/dbConnection');

// Controlador que devuelve una promesa
function getFilms(){
    // Creamos una promesa y la devolvemos
    return new Promise((resolve, reject) => {
        // Hacemos la llamada a la bbdd
        CONN.query('SELECT * FROM films', (error, rows) => {
            // Cuando la bbdd nos devuelva los datos resolvemos la promesa
            resolve(rows);
        })
    })
}


// Controlador que añade una pelicula y la devuelve
function addFilm(film){
    return new Promise((resolve, reject) => {
        CONN.query("INSERT INTO films SET ?", [film], (err, result) => {
            CONN.query("SELECT * FROM films WHERE id = ?", [result.insertId], (selErr, films) => {
                resolve(films[0]);
            });
        });
    })
}

module.exports = {
    getFilms,
    addFilm
}

