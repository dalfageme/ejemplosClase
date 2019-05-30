const express = require('express');
const router = express.Router();

const filmsController = require('../../controllers/films');


// El post para crear una pelicula por json
router.post('/', async (req, res) => {
    const film = {
        release_date: req.body.release_date,
        title: req.body.title,
    };

    let result = await filmsController.addFilm(film);
    res.send(result);
});

module.exports = router;