
let trabajador = new Worker('./miWorker.js');
trabajador.addEventListener('message', (data) => {
    console.log(data.data);
})


window.addEventListener('load', () => {
    console.log('Document laoded');
})