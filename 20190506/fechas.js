// Fechas
var fecha = new Date('2019-05-20' );
console.log('Fecha completa: ', fecha);   //Mon May 20 2019 02:00:00 GMT+0200 
console.log('Mes: ',fecha.getMonth());    //Mes:  4
console.log('Dia: ',fecha.getDate());     //Dia:  20
console.log('Año: ',fecha.getFullYear()); // 2019
console.log(fecha.getTime()); // 1558310400000 (Milisegundos desde 1-1-1970)

var hoy = new Date(); // Crea una fecha del momento actual
