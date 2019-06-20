import React, {createRef} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import './quotes.scss';

let Quote = styled.p`
    flex: 20% 0 0;
    background-color: white;
    border-radius: 10px;
    color: #ff4000;
    margin-right: 0.9%;
    padding: 10px

    &:hover {
        color: blue
    }
` 

function quotes(props){
    let divRef = createRef();


    return <div >
        <h1>Chuck Norris Quotes</h1>
        { !props.quotes.length && <h3>Chuck está de camino</h3> }
        <div className="container" ref={divRef}>
            { props.quotes.map( q => <Quote key={q.id} className="item">{q.text}</Quote>) }
        </div>
        <button onClick={() => console.log(divRef)}>IR ARRIBA</button>
    </div>
}

function mapStateToProps(state){
    console.log(state);
    return {
        quotes: state.quotes.quotes
    }
}

// let conexion = connect(mapStateToProps)
// export default conexion(quotes)

export default connect(mapStateToProps)(quotes);


