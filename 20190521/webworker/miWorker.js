postMessage('cargado');

let i = 0;

setInterval(() => {
    postMessage({number: ++i});
}, 1000 * 2)    