let express = require('express');
let app = express();


const PORT = 3000;

app.get('/', (request, response) => {
    response.send('Hola mundo');
});

app.get('/about', (request, response) => {
    response.send({
        nombre: 'Jose',
    });
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
})


app.get('/info', (req, res) => {
    res.send(req.query.name);
})


app.get('/name/:name', (req, res) => {
    res.send(req.params.name);
})


app.post('/favorite', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, ()=> {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})

