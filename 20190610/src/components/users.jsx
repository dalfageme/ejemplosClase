import React from 'react';

class users extends React.Component{
    constructor(props){
        super(props)
        console.log('hello');
    }

    render(){
        console.log(this.props);
        return <div>
            <h1>Es la pagina de usuarios</h1>
        </div>

    }
}

export default users;