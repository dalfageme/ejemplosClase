

console.log('is finite', isFinite(1)); //true
console.log('is finite', isFinite(1 / 0)); //false
console.log('is nan', isNaN(2)  ); //
console.log(Number('1.2'),  +'1.2', '1.2', Number('1.2') === +'1.2');
console.log(+'1.2' + 3);
console.log(String(1.2), typeof(''  + 1.2) );
console.log(Number('1.2'), parseInt('1.2'));
console.log(Number('1.2e10'), parseFloat('1.2e10'), +'1.2e10');

