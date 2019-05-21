
//Funcion que muestra nombre, edad y año actual
function mostrar(nombre, edad){
    console.log(nombre, edad, new Date().getFullYear());
}

// La funcion mostrar hora se ejecutará cada 2 segundos 
// con los parametros 'david' y 22
setInterval(mostrar, 1000 * 2, 'david', 22);

// Almacenamos la id del intervalo
var id = setInterval(mostrar, 1000 * 2, 'paco', 22);
// Eliminamos la programación de la funcion y no se ejecutará
clearInterval(id);
