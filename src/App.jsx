import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import { GameProvider } from './components/Context/Context';

function App() {
  return (
    <GameProvider>
      <Menu />
    </GameProvider>
  );
}

export default App;
