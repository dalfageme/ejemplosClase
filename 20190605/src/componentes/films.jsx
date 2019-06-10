import React, {Component} from 'react';
import Film from './film';
import './filmsStyles.css';

class Films extends Component{
    constructor(props){
        super(props);
        this.state = {
            films: [
                {title: 'Shrek', image: 'https://i.ytimg.com/vi/wC2ANCka21I/maxresdefault.jpg'},
                {title: 'Matrix', image: '', subtitle: 'Las pastis'}
            ],
            title: '',
        }
        this.onAddFilm = this.onAddFilm.bind(this);
    }

    submit(data){
        console.log('submit form');
        console.log(data);
    }

    onTitleChanges(event){
        this.setState({
            title: event.target.value
        })
    }

    onAddFilm(event){
        console.log(this.state.title);
        this.setState({
            films: [
                ...this.state.films,
                {title: this.state.title}
            ],
            title: '',
        })
        event.preventDefault();
    }

    render(){
        return <div className="allFilms">
            <h1>Mis peliculas</h1>
            {this.state.films.map((film, i) => <Film key={i} {...film}/>)}
            <form onSubmit={this.onAddFilm}>
                <input name="title" value={this.state.title} onChange={(e) => this.onTitleChanges(e)}/>
            </form>
        </div>
    }
}

export default Films;