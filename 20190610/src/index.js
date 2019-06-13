import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Users from './components/users';
import Films from './components/films';
import Detail from './components/detail';

const router = (
    <BrowserRouter>
        <div>
            <h1>hola</h1>
            <Switch>
                <Route path="/" component={Index} exact/>
                <Route path="/films" component={Films} exact/>
                <Route path="/films/:id" component={Detail} exact/>
                <Route path="/users/:idUsuario" component={Users}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
