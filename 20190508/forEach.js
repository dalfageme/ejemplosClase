var pueblos = [
    'elda',
    'petrel',
    'novelda',
    'alcoy'
];


// En el array incluir solo los pueblos de 4 letras
var pueblos4Letras = [];
function anadirSi4letras(pueblo){
    if(pueblo.length === 4){
        pueblos4Letras.push(pueblo);
    }
}
pueblos.forEach(anadirSi4letras);
console.log(pueblos4Letras)


// Mostrar los pueblos
pueblos.forEach(function(pueblo){
    console.log('Esta es otra manera de decir', pueblo);
});

// arrow function
pueblos.forEach((pueblo) => {
    console.log('Esta es otra manera de decir', pueblo);
});


