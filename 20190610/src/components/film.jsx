import React from 'react';
import {Link} from 'react-router-dom';

function film(props){
    return <div>
        <h3>{props.title}</h3>
        <span>{props.overview}</span>
        <Link to={"/films/" + props.id}>Ver detalle</Link>
    </div>
}

export default film;
