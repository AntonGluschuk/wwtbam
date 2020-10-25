import React from 'react';
import './css/Start.css';
import handLogo from './images/hand1.png';
import Game from '../Game/Game';

function Start(props) {
  const {
    status,
    changeStatus,
    config,
    handleAnswer,
    questions,
    step,
    showAnswer,
  } = props;
  return !status ? (
    <div className="main">
      <img src={handLogo} alt="hand" />
      <div className="main_start">
        <h1>Who wants to be a millionaire?</h1>
        <button type="submit" onClick={() => changeStatus(true)}>Start</button>
      </div>
    </div>
  ) : (
    <>
      {config.length > 0 ? (
        <Game
          config={config}
          questions={questions[step]}
          step={step}
          showAnswer={showAnswer}
          handleAnswer={handleAnswer}
        />
      ) : null}
    </>
  );
}

export default Start;
