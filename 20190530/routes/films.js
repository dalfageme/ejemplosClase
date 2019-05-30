const express = require('express');
const CONN = require('../helpers/dbConnection');
const filmsController = require('../controllers/films');

const router = express.Router();

// Listado de peliculas
router.get('/', async (req, res) => {
    let films = await filmsController.getFilms();
    let userName = req.session.name;
    res.render('films', {
        films,
        userName,
    });
});

// Post que se llama desde el formulario
router.post('/', async (req, res) => {
    let result = await filmsController.addFilm(req.body);

    res.render('films/added', {result});
})

router.get('/add', (req, res) => {
    res.render('films/add');
})




module.exports = router;