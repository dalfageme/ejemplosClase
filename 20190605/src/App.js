import React from 'react';
import Films from './componentes/films';
import './App.css';

function App() {
  return (
    <div className="App">
      <Films config={{title: 'hola'}}/>
      <div style={{backgroundColor: 'white', padding: 10}}>
        <div className="allFilms">loremsdasawdadasdsad</div>
      </div>
    </div>
  );
}

export default App;
