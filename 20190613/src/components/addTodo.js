import React from 'react';
import {addTodo} from '../actions/todos';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    render(){
        return <form onSubmit={(e) => addTodo(this.state.title) | e.preventDefault() | this.setState({title: ''})}>
            <input  placeholder="title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
            <button>nuevo</button>
        </form>
    }
}

export default AddTodo