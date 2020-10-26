import React, { useContext } from 'react';
import './css/Result.css';
import handLogo from './images/hand1.png';
import { GameContext } from '../Context/Context';

function Result() {
  const {
    score,
    resetGame,
  } = useContext(GameContext);

  return (
    <div className="result">
      <img className="result__img" src={handLogo} alt="hand" />
      <div className="main__result">
        <h2 className="main__result_subtitle">Total score:</h2>
        <h1 className="main__result_title">{`${score} earned`}</h1>
        <button className="main__result_btn" type="submit" onClick={resetGame}>Try again</button>
      </div>
    </div>
  );
}

export default Result;
