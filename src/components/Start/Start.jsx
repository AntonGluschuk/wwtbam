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
    showSide,
    setShowSide,
  } = props;
  return !status ? (
    <div className="main">
      <img className="main__img" src={handLogo} alt="hand" />
      <div className="main__start">
        <h1 className="main__start_title">Who wants to be a millionaire?</h1>
        <button className="main__start_btn" type="submit" onClick={() => changeStatus(true)}>Start</button>
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
          showSide={showSide}
          setShowSide={setShowSide}
        />
      ) : null}
    </>
  );
}

export default Start;
