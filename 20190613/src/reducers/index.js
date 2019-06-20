import { combineReducers } from 'redux';

import todos from './todos';

export default combineReducers({
    todo: todos,
})