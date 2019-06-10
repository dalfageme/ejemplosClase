import React from 'react';
import { Link } from 'react-router-dom';

function index(props){
    return <div>
        <Link to={"/users/" + 2} >Usuarios</Link>
        <h1>Estas en el index</h1>
    </div>
}

export default index;