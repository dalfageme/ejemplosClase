import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component{
    constructor(props){
        console.log('1.Constructor');
        console.log('Bool', !!props.blocked);
        super(props); //Obligatorio por ley
        this.state = {
            counter: +props.inicio,
        }
    }

    increment = () => {
        this.setState({counter:  this.state.counter + 1});
    }

    decrement(){
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        console.log('2.Renderizando');
        return <div>
            {this.state.counter}
            <button onClick={this.increment}  disabled={this.props.blocked}>+</button>
            <button onClick={() => this.decrement()}  disabled={this.props.blocked}>-</button>
            <button onClick={this.decrement.bind(this)}  disabled={this.props.blocked}>-</button>
        </div>
    }

    componentDidMount(){
        console.log('3.Componente montado')
    }

    componentDidUpdate(){
        console.log('4. Update')
    }

    componentWillUnmount(){
        console.log('5. MUERTE');
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.counter > 11;
    }
}

Counter.propTypes = {
    inicio: PropTypes.number.isRequired,
    fin: PropTypes.arrayOf(PropTypes.number),
    blocked: PropTypes.bool,
}

export default Counter;