import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard'

function App() {
  return (
    <div className="App">
      <h3>To Start the Game, select number of Players and the click Start</h3>
      <div className="container">
        <GameBoard />
      </div>
      <h3 result-msg>Hurary! You win</h3>
    </div>
  );
}

export default App;
