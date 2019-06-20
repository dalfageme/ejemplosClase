import React from 'react';
import  './todos.scss';

class TodoItem extends React.Component{
    render(){
        return <div className="todo">
            <span>{this.props.id + 1}</span>
            <h2>{this.props.text} </h2>
        </div>
    }

}

export default TodoItem