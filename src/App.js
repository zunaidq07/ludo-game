import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard'
import LudoContextProvider from './ludoContext/ludoState'

function App() {
  return (
    <div className="App">
      <LudoContextProvider>
        <h3>To Start the Game, select number of Players and the click Start</h3>
        <div className="container">
          <GameBoard />
        </div>
        <h3 result-msg>Hurary! You win</h3>
      </LudoContextProvider>
    </div>
  );
}

export default App;
