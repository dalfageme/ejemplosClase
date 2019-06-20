let initialState = {
    quotes: []
}

function quotes(state = initialState, action){
    // dependiendo de la accion hacer una cosa u otra (switch)
    // dependiendo del caso devolver el estado actualizado
    switch(action.type){
        case 'ADD_QUOTE':
            return {
                ...state,
                quotes: [
                    ...state.quotes,
                    { text: action.text, id: action.id }
                ]
            }
        default: 
            return state;
    }
}


// exportar el reducer
export default quotes;