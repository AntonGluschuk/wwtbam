import React, { useContext } from 'react';
import './App.css';
import Result from './components/Result/Result';
import Start from './components/Start/Start';
import { GameProvider, GameContext } from './components/Context/Context';

function App() {
  const {
    gameEnd,
  } = useContext(GameContext);

  return !gameEnd ? (
    <GameProvider>
      <Start />
    </GameProvider>
  ) : (
    <GameProvider>
      <Result />
    </GameProvider>
  );
}

export default App;
