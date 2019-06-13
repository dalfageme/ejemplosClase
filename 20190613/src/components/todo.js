import React from 'react';

class TodoItem extends React.Component{
    render(){
        return <div>
            <h2>{this.props.id + 1}.- {this.props.text} </h2>
        </div>
    }

}

export default TodoItem