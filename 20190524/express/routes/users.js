var express = require('express');
var router = express.Router();
var fs = require('fs');

let users = [
  { id: 2, nombre: 'Juan'},
  { id: 3, nombre: 'David'},
  { id: 4, nombre: 'Jose'}
]

/* GET users listing. */
router.get('/', (req, res) => {
  let user = req.query.apellido;
  res.send('EL USUARIO ES: ' + user);
});

router.get('/:id', (req, res) => {
  let id = +req.params.id;
  let user = users.find((u) => u.id === id);
  if(user){
    res.send( 'El usuario es: '+user.nombre);
  }else{
    res.send('No hay ningun usuario')
  }
});


router.post('/newUser', (req, res)=>{
  // recoger el cuerpo de la peticion
  let body = req.body;
  console.log(typeof body);

  //Comprobamos que el objeto tenga un nombre
  if(body.nombre){
    // Añadir al final de un archivo
    fs.appendFile(__dirname + '/../data/names', body.nombre + '\n', (err) => {
      if(!err){
        res.send(body.nombre + ' guardado correctamente');
      }else{
        res.send('Hubo un error');
      }
    })
  }else{
    res.send('El objeto usuario no tiene un nombre');
  }
});

router.get('/name/:name', (req, res) => {
  // Leemos el archivo con la codificacion de caracteres utf-8
  fs.readFile(__dirname + '/../data/names', "utf-8",(err, data) =>{
    let personas = data.split('\n')
    let found = personas.find(p => p === req.params.name);

    if(found){
      res.send('Persona encontrada');
    }else{
      res.send('Persona NO encontrada');
    }
  })
})


module.exports = router;
