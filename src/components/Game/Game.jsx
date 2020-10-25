import React from 'react';
import './css/Game.css';
import Questions from './Questions/Questions';

function Game(props) {
  const {
    config, questions, step, handleAnswer, showAnswer,
  } = props;
  return (
    <div className="board">
      <Questions
        config={config}
        questions={questions}
        step={step}
        showAnswer={showAnswer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Game;
