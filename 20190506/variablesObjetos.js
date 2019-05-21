var A = 'a mayuscula';
var a = 'a miniscula';

var lugar = 'torrejuana';
console.log('variable torrejuana', lugar);


var persona1 = {
    nombre: 'Jerónimo',
    edad: 28,
    profesion: 'estudiante',
    perilla: true,
};

var persona2 = {
    nombre: 'David',
    nota: 10,
    edad: 35,
    profesion: 'estudiante',
    perilla: false,
};

// Acceder a propiedades
console.log('NOMBRE:', persona1.nombre); // NOMBRE: Jeronimo
console.log('EDAD:', persona1['edad']); // EDAD: 28






console.log(persona1.edad > persona2.edad);
console.log(persona1.edad < persona2.edad);



// Ternarios
console.log(persona1.edad < persona2.edad ? 'es menor' : 'es mayor');
var mayor = persona1.edad > persona2.edad ? persona1 : persona2; 


console.clear();
// Operaciones con strings
var texto = "hola";

console.log(texto, 'mundo');
console.log(texto + ' mundo');
console.log(texto += ' mundo');

console.log(-'0' + 1 - 3 + ' adios');
console.log(1 + 3 + ' adios');

function fun(){
    var x = 0;
    x++;
    return x > 1 ? 'mayor' : 'no';
}

console.log(fun());


console.clear();
// Control de flujo
var a = 4;
var b = "4";

if(a > b){
    console.log('mayor que');
} else if(a < b) {
    console.log('menor que');
} else if( a === b) {
    console.log('son iguales');
} else {
    console.error('Hay un problema');
}

console.clear();
// Switch
switch(persona1.nombre){
    case "Gerónimo":
        console.log('Es con J!!!!');
        break;
    case "Jeronimo":
        console.log('Falta el acento');
        break;
    default:
        console.log('Estamo bien');
        break;
}

//Do While
// var edad = prompt('Dime tu edad?');
// while(edad<18){
//     var edad = prompt('Dime tu edad?');
// }

// // Do While
// do{
//     var edad = prompt('Dime tu edad?');
// }while(edad<18);

// For
var i;
for (i = 0; i < 10 ; i++) /*inicializador*/ /*comprobación*/ /*contador*/ {
    //código a ejecutar
    console.log(i);
}


//Formato for
for(var i = 0; i < 10 ; i++){
    // EJecutar en iteracion
    console.log(i);
}

// While
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// for (let i = 0; i < gente.length; i++) {
//     const element = array[i];
    
// }


console.clear();
// For in
for( var prop in clase1){

    console.log(typeof prop);
    console.log(persona1[prop]);
}

//For of
console.clear();
for(var i = 0; i < clase1.length; i++){
    console.log(clase1[i].nombre);
}

var numeros = [
    10,
];

for(var numero of numeros){
    console.log(numero);
}


/*
*
**
***
****
*****
*/

var cadena;
for (var i = 0; i < 6; i++) {
    cadena = '';
    for (var j = i; j < 6; j++) {
        cadena += '*';
    }
    console.log(cadena);
}

var numeroLineas = 6;
var caracter = '$';

for (var i = 0; i < numeroLineas; i++) {
    console.log(caracter.repeat(numeroLineas-i));
}

/*
var cadena;
for (i = 0; i < 10; i++) {
    cadena = '';
    espacios =  '';
    for (j = i; j < 10; j++) {
        if (i%2 != 0) {

        }
        cadena += '*';
    }
    console.log(cadena);
}*/


console.clear();
var hw = 'hello world';

var busqueda = 'o';
var inicio = hw.indexOf(busqueda) + 1;
console.log(hw.indexOf(busqueda, inicio));

console.clear();
var miArrProto = [ 'Pedro Sanchez', 'Pablo Casado', 'Albert Rivera', 'Pablo Iglesias', 'Santiago Abascal' ];
var devuelvePush = miArrProto.push('Iniesta', 'Paco');
devuelvePush = miArrProto.unshift('el rey');

var arrCatalanes = ['Rufian', 'Torra'];
var deuvelveConcat = miArrProto.concat(arrCatalanes);
// console.log(deuvelveConcat);

//Pruebas strings
var otraVariable = 'hola mundo';
otraVariable.charAt(0).toLocaleLowerCase().toUpperCase();

// shift
console.clear();
console.log('Eliminado: ', miArrProto.shift());
console.log('Eliminado: ', miArrProto.pop());
console.log(miArrProto.join('\n vota a: '));
console.log(miArrProto.slice(1, 3));

console.log('Prueba splice');
miArrProto.splice(3,0, 'M. Rajoy', 'ZP').push('');
console.log(miArrProto);


var misNumeros = [ 0 , 1, 2 , 3];
console.log(misNumeros);
misNumeros.reverse();
console.log(misNumeros);

