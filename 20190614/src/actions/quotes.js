// import store
import store from '../store';

const API_URL = 'https://api.chucknorris.io/';
const RANDOM_JOKES = 'jokes/random';

async function addQuote(){
    // pedir al servidor los datos
    let response = await fetch(API_URL + RANDOM_JOKES)
    let data = await response.json();

    console.log(data)

    // generar el  action (objeto con un type y la frase)
    let action = {
        type: 'ADD_QUOTE',
        text: data.value,
        id: data.id
    }

    // hacer un dispatch (que llama al reducer)
    store.dispatch(action);
}

function removeLastQuote(){
    
}

// exportar las actions
export {
    addQuote,
    removeLastQuote
}