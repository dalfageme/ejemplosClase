import store from '../store';

let index = 0;

export function addTodo(text) {
    let myAction = {
        type: 'ADD_TODO',
        text,
        id: index++
    };
    store.dispatch(myAction)
}
