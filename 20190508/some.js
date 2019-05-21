// Cafeteria: si alguien tiene para pagar un café me lo puedo pedir
var dinero = [ 0.2, 0.3, 0.3];
var precioCafe = 0.4;
var puedoPagarCafe = dinero.some(function(d) {
    return d >= precioCafe;
})

console.log(puedoPagarCafe ? 'Puedo pagar' : 'no puedo pagar');
