import React from 'react';
import Questions from './Questions/Questions';

function Game(props) {
  const {
    config, questions, step, handleAnswer, showAnswer,
  } = props;
  return (
    <>
      <Questions
        config={config}
        questions={questions}
        step={step}
        showAnswer={showAnswer}
        handleAnswer={handleAnswer}
      />
    </>
  );
}

export default Game;
