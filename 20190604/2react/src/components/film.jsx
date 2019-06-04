import React, {Component} from 'react';

function film(props){
    return <div>
        <h1>{props.title}</h1>
        <img src={props.img}/>
    </div>
}

class Film extends Component{
    render(){
        return <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.img}/>
    </div>
    }
}

export default Film;