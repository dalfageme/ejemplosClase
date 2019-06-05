import React from 'react';

function film(props){
    return <div>
        <h2>{props.title}</h2>
        <img src={props.image}/>
    </div>
}

export default film;