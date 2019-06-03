import React from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter nombre="david" inicio="100" fin="200"></Counter>
      <Counter nombre="david" inicio="200" fin="200"></Counter>
    </div>
  );
}

export default App;
