function pangrama(texto) {
    let letras = "qwertyuiopasdfghjklzxcvbnm".split('');
    for (let i = 0; i < letras.length; i++){
        if (! texto.includes(letras[i])) {
            return false
        }
    }
    return true;
}

function pangramaEvery(texto) {
    let letras = "qwertyuiopasdfghjklzxcvbnm".split('');
    return letras.every(letra => texto.includes(letra));
}



console.log(pangrama('hola'));
console.log(pangramaEvery('qertyuiopasdfghjklzxcvbnm'));
