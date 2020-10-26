import React, { useContext } from 'react';
import './css/Start.css';
import handLogo from './images/hand1.png';
import Game from '../Game/Game';
import { GameContext } from '../Context/Context';

function Start() {
  const {
    config,
    gameStart,
    setGameStart,
  } = useContext(GameContext);

  return !gameStart ? (
    <div className="main">
      <img className="main__img" src={handLogo} alt="hand" />
      <div className="main__start">
        <h1 className="main__start_title">Who wants to be a millionaire?</h1>
        <button className="main__start_btn" type="submit" onClick={() => setGameStart(true)}>Start</button>
      </div>
    </div>
  ) : (
    <>
      {config.length > 0 ? (
        <Game />
      ) : null}
    </>
  );
}

export default Start;
