const http = require('http');

//Array de peliculas para mostrar
let peliculas = [
    { title: 'falsooo'},
    { title: 'avatar'}
];

// Importar y usar módilo
const miModulo = require('./modulo');
miModulo.holaMundo();
let nombreReversed = miModulo.daLaVuelta('david');
console.log(nombreReversed);


const IP = '127.0.0.1';
const PUERTO = 3000;


let server = http.createServer(procesarPeticion);

server.listen(PUERTO, IP, ()=> {
    console.log('Escuchando');
})


function  procesarPeticion(peticion, respuesta){
    let path = peticion.url;
    respuesta.setHeader('content-type', 'application/json')
    
    // Cuando reciba una peticion a /peliculas
    if(path === "/peliculas"){
        respuesta.statusCode = 200;
        respuesta.end(JSON.stringify(peliculas));
    }else{
        // Si no es a peliculas damos un error 404 not found
        respuesta.statusCode = 404;
        let error = {
            error: 'Pagina no encontrada',
        }
        respuesta.end(JSON.stringify(error));
    }
}







