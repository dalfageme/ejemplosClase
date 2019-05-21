// Discoteca: un grupo puede entrar si todos sus meimbros tienen al menos 18 años
var edades = [ 20, 90, 127 ,20, 20, 20, 20];
var puedenEntrar = edades.every(function(edad){
    return edad >= 18;
});

console.log(puedenEntrar ? 'Adelante' : 'No podeis entrar');