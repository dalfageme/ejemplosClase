import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import{api_key,api_url,img_url } from '../config.js';

class Detail extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            film: null
        }


        this.filmId = props.match.params.id;

        Axios.get(api_url + 'movie/' +this.filmId + api_key).then((resp) => {
            let film = resp.data;
            this.setState({
                film
            })
        })

        props.history.block('Are you sure you want to leave this page?');

    }

    render(){

        if(this.state.film){
            return <div>
                <Link to="/films">Go home</Link>
                <h1>{this.state.film.title}</h1>
                <img src={img_url + this.state.film.poster_path} alt={this.state.film.title}/>
            </div>
        }else{
            return <div>
                <h2>Cargando pelicula...</h2>
            </div>
        }
    }
}


export default Detail;