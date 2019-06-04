import React from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  let counters= [
      100,
      200,
      300,
      23
    ]

  return (
    <div className="App">
    { counters.map((init,i) => {
      return <Counter key={i}  inicio={init} fin="200"></Counter>
    })}
    </div>
  );
}

export default App;
