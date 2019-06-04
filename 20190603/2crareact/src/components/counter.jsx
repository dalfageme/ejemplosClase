import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <span>{this.state.contador}</span>
            <button onClick={ ()=> this.incremento() }>+</button>
        </div>
    }
}

Component.propTypes={
    inicio: PropTypes.number
}

export default Counter;