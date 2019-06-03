import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props); //Obligatoria y al principio
        this.state = {
            contador: +props.inicio
        }
    }

    incremento(){
        this.setState({contador: this.state.contador + 1});
    }

    render(){
        return <div>
            <button>-</button>
            <input value={this.state.contador}/>
            <button onClick={ ()=> this.incremento() }>+</button>
        </div>
    }
}

export default Counter;