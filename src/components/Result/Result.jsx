import React from 'react';
import './css/Result.css';
import handLogo from './images/hand1.png';

function Result({ result, resetGame }) {
  return (
    <div className="result">
      <img src={handLogo} alt="hand" />
      <div className="main_result">
        <h2>Total score:</h2>
        <h1>{`${result} earned`}</h1>
        <button type="submit" onClick={resetGame}>Try again</button>
      </div>
    </div>
  );
}

export default Result;
