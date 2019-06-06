import React, {Component} from 'react';
import Film from './film';

class Films extends Component{
    constructor(props){
        super(props);
        this.state = {
            films: [
                {title: 'Shrek', image: 'https://i.ytimg.com/vi/wC2ANCka21I/maxresdefault.jpg'},
                {title: 'Matrix', image: '', subtitle: 'Las pastis'}
            ],
            elements: [
                <div>Hola</div>,
                <p> Adios</p>,
                <span>Mundo</span>
            ]
        }
    }

    render(){
        return <div>
            <h1>Mis peliculas</h1>
            {this.state.elements}            
            {this.state.films.map(film => <Film {...film}/>)}
        </div>
    }
}

export default Films;