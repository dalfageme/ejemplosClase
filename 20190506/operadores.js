
// Operadores aritmeticos
console.log(2+2);   // 4
console.log(2-2);   // 0
console.log(2*3);   // 6
console.log(6 / 3); // 2
console.log(6%4);   // 2  (resto)
console.log(2**3);  // 8 (2^3)


var numero = 4;
console.log(numero++); // 4 
console.log(++numero); // 6
console.log(numero--); // 6
console.log(--numero); // 4


console.log(numero/=2); //2


//Operadores logicos
console.log(true && false);     // false
console.log(true && true);      // true
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || false);    // false
console.log((true || false) && true); // true 
console.log(!true);  //false
console.log(!!true); //true


var cadena = "222";
console.log(cadena.length > 0); //true
console.log(!!cadena); //true
cadena = "";
console.log(!!cadena); //false