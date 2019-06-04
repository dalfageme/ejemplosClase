import React, {Component} from 'react';
import './App.css';
import Film from './components/film';
import Counter from './components/counter';

class App extends Component {
  constructor(){
    super();

    this.state = {
      mostrarContador: true
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Mis peliculas</h1>
        <Film title="shrek" img="https://is5-ssl.mzstatic.com/image/thumb/Video118/v4/0c/fa/92/0cfa92e1-6c91-d520-77c0-229ed50d0322/pr_source.lsr/268x0w.jpg"></Film>
        <Film title="los increibles 2" img=""></Film>
        {
          this.state.mostrarContador && <Counter inicio={10} blocked></Counter>
        }
        <button onClick={() => this.setState({mostrarContador: false})}>OCULTAR</button>
        <button onClick={() => this.setState({mostrarContador: true})}>MOSTRAR</button>
      </div>
    );
  }
}

export default App;
