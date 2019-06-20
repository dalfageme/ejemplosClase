import React from 'react';
import './App.css';
import Quotes from './components/quotes';
import LoadQuote from './components/loadQuote';

function App() {
  return (
    <div className="App">
      <Quotes/>
      <LoadQuote/>
    </div>
  );
}

export default App;
