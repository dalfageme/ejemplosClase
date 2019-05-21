

function saluda(){
    Array.from(arguments)
}

let filtrados = [0, 1, 2, 3, 4, 5, 6 , 7].filter(n => n % 2 === 0)
console.log(filtrados);
let multiplicados = [0,1, 2, 3].map( (n) => {
    return n * 2 
});

console.log(multiplicados)


let prueba = [0 , 2, 4];
let prueba2 = [ ... prueba, ...[0,23] ];

prueba2.push(7);
console.log(prueba2);

let user = {
    nombre: 'david'
}

let manolo = {...user, edad: 20};
console.log(manolo)


function hola(hola, ...props){
    console.log(props);
}

hola('hola', 'mundo');


let [a, b, pac] = [1,2,3];
console.log(pac);

let {name: newName} = {
    name: 'david',
    edad: 21
}

console.log(newName);

function test({a, ...rest}){
    console.log(a, rest);
}

test({a: 'a', last: 'last', another: 'another' });

let myMap = new Map();
myMap.set('david', {nombre: 'david', edad: 22});
myMap.set('david', {nombre: 'david', edad: 23});

console.log(myMap.filter(e));
