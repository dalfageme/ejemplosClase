import React from 'react';
import { connect } from 'react-redux';
import AddTodo  from './addTodo';
import TodoItem from './todo';

class Todos extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return <div>
            <AddTodo/>
            <h1>Todos</h1>
            <div className="todos" ref={this.myRef}>
                {  this.props.todos.map((t) => <TodoItem key={t.id}  {...t}/>)}
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {
        todos: state.comics
    }
}

const connection = connect(
    mapStateToProps,
)

export default connection(Todos)
