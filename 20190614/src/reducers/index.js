import { combineReducers } from 'redux';

import quotes from './quotes';

let reducer = combineReducers({
    quotes: quotes,
//    ^         ╚> el nombre del reducer importado
// apartado en el store global
})

export default reducer;