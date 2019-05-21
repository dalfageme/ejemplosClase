//funcion asincrona de pruebas
function resolveIn(delay){
  return new Promise(resolve => {
    setTimeout(
        () => resolve(delay),
    delay);
  });
}

//funcion asincrona que da error
function daErrorEn(){
    return new Promise((resolve, reject) => {
        reject('Problemas')
    })
}

// Prueba promise all se resuelve en el tiempo máximo ( en este caso 2000 milisegundos )
Promise.all([resolveIn(100), resolveIn(2000), resolveIn(1)]).then((values) => {
    console.log(values); // [100, 2000, 1]
}).catch((err) => {
    console.log('Ha habido un problema');
}) 

// Promise race devuelve el valor de la primera promesa resuelta (en este caso 100 milisegundos)
Promise.race([resolveIn(500), resolveIn(100), resolveIn(30000)]).then((value) => {
    console.log(value);  // 100
});

async function miFun(){
    let resultado;
    try{
        resultado = await resolveIn(333);
    }catch(err){
        console.log(err);
    }
    console.log(resultado) //333
}

miFun();


// ASYNC en function anónima
let miFunAnonima = async function(){
    let resultado = await resolveIn(333);
    console.log(resultado);
}

// ASYNC en function flecha
let miFlecha = async () => {
    let resultado = await resolveIn(333);
    console.log(resultado);
}


// Promise all con await (tiempo hasta console.log = maximo(100, 200) = 200ms)
async function promiseAll(){
    try{
        // promise all se lanzan en paralelo
        // se resuelve cuando se resuelva la ultima promesa
        let results = await Promise.all([resolveIn(100), resolveIn(200)]);
        console.log('Results promise.all', results); //Results promise.all [100, 200]
    }catch(err) {
        console.error(err);
    }
}

// Dos awaits seguidos (tiempo hasta console.log = 100 + 200 = 300ms)
async function promise(){
    let res1 = await resolveIn(100)
    let res2 = await resolveIn(200);
    console.log('Results promises', res1, res2); //Results promises 100 200
}


promiseAll();
promise();






async function hazCosas(){
    let response = await axios.get()
    let peliculas = response.data.results;

    print(peliculas);


    // Otra opcion de hacer lo de arriba
    axios.get().then(result => {
        peliculas = result.data.results
        print(peliculas)
    })
}