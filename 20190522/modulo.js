function mayusculas(nombre){
    return nombre.toUpperCase();
}


function daLaVuelta(nombre){
    let arrayNombre = nombre.split('');
    arrayNombre.reverse();
    return arrayNombre.join('');
}

function saluda(){
    console.log('hola');
}

module.exports = {
    mayusculas: mayusculas,
    daLaVuelta,
    holaMundo: function(){
        console.log('Hola mundo');
    }
}