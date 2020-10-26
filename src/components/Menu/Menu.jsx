import React, { useContext } from 'react';
import Result from '../Result/Result';
import Start from '../Start/Start';
import { GameContext } from '../Context/Context';

function Menu() {
  const {
    gameEnd,
  } = useContext(GameContext);

  return !gameEnd ? (
    <Start />
  ) : (
    <Result />
  );
}

export default Menu;
