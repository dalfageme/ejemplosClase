import React from 'react';
import filmStyles from './filmStyles';

function film(props){
    const DEFAULT_IMG = 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';
    return <div>
        <h2 style={filmStyles.p}>{props.title}</h2>
        <h2>hola</h2>
        {
            props.subtitle &&
            <h3>{props.subtitle}</h3>
        }
        <img src={props.image ? props.image : DEFAULT_IMG}/>

    </div>
}

export default film;