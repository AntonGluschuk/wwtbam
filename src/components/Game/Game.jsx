import React from 'react';
import './css/Game.css';
import Questions from './Questions/Questions';

function Game(props) {
  const {
    config, questions, step, handleAnswer,
  } = props;
  return (
    <div className="board">
      {console.log(config, questions)}
      <Questions
        config={config}
        questions={questions}
        step={step}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Game;
