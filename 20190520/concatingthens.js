function miPromise(){
    return new Promise((resolve, reject) => {
        resolve('Hola');
    })
}

miPromise().then((resultado) => {
    console.log(resultado);
    return resultado + '_';
}).then((resultado) => {
    console.log(resultado);
    return resultado + 'mundo'
}).then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
}).finally(() => { // Soporte desde la version 10.3 nodejs
    console.log('Acabamos');
});
