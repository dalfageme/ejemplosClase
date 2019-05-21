let palitos = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

function buenosDias(segundosTotales){
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let total = 0;

    for (let i = 0; i <= segundosTotales; i++) {
        if(segundos >= 60){
            minutos++;
            segundos = 0;
        }

        if(minutos >= 60){
            horas ++;
            minutos = 0;
        }

        total+=cuentaPalitos(horas) + cuentaPalitos(minutos) + cuentaPalitos(segundos)
        
        segundos++;
    }

    return total;
}

function cuentaPalitos(numero){
    return numero < 10 ? palitos[0] + palitos[numero] : palitos[numero / 10] + palitos[numero % 10]
}


console.log(buenosDias(0));
console.log(buenosDias(4));