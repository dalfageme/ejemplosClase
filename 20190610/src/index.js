import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Users from './components/users';


const router = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/users/:idUsuario" component={Users}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
