// Referencias en objetos
// Cuando igualamos un objeto a otro, los dos apuntan hacia el mismo objeto
var manu = {
    nombre: 'Manu'
}

let persona = manu ;
persona.nombre = 'Paco';

console.log(manu.nombre); // 'Paco'
console.log(persona.nombre); // 'Paco'

manu.nombre = 'Manu';


// Para evitar eso tenemos que clonar las propiedades del objeto
let persona2 = Object.assign({}, manu);
let persona3 = {...manu};

// persona2.nombre = 'Juan';
persona2.nombre = 'Julio';
persona3.nombre = 'Julian';

console.log(manu.nombre);     // Manu
console.log(persona2.nombre); // Julio
console.log(persona3.nombre); // Julian


// Referencias en arrays
var primerArr = [1, 2, 3];
var segundoArr = primerArr;
segundoArr.push(4);
primerArr.push(5);
console.log(primerArr); // [1, 2, 3, 4, 5]
console.log(segundoArr); // [1, 2, 3, 4, 5]

// Para evitar esto tenemos que clonar el array
var arrayNuevo1 = primerArr.slice();
var arrayNuevo2 = [...primerArr];

arrayNuevo1.push(7);
arrayNuevo2.push(8);

console.log(primerArr);   // [ 1, 2, 3, 4, 5 ]
console.log(arrayNuevo1); // [ 1, 2, 3, 4, 5, 7 ]
console.log(arrayNuevo2); // [ 1, 2, 3, 4, 5, 8 ]

