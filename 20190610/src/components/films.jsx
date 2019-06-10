import React from 'react';
import Film from './film';
import Axios from 'axios';
import { api_url, api_popular_url, api_key } from '../config';

class Films extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            films: []
        }


        Axios.get(api_url + api_popular_url + api_key).then((resp) => {
            let filmsFromServer = resp.data.results;
            this.setState({
                films: filmsFromServer
            })
        })
    }


    render(){
        return <div>
            <h1>Estas son las pelis</h1>
            {this.state.films.map((film, i) => <Film {...film} key={i}/> )}
        </div>
    }
}

export default Films;