import React from 'react';
import './css/Questions.css';

function Questions({
  config: [letters, money],
  questions:
  {
    question,
    incorrect_answers,
    correct_answer,
  },
  step,
  handleAnswer,
  showAnswer,
}) {
  const shakeAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
  return (
    <div className="board">
      <main className="board__game">
        <button className="board__icon" type="button" aria-label="Open"><i className="fas fa-align-justify" /></button>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="board__answers">
          {shakeAnswers.map((answer, idx) => {
            const bgAnswer = showAnswer ? answer === correct_answer ? 'correct_answer'
              : 'wrong_answer'
              : null;
            return (
              <button key={letters[idx]} id={`${bgAnswer}`} onClick={() => handleAnswer(answer)} type="submit">
                <span>{letters[idx]}</span>
                <p dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            );
          })}
        </div>
      </main>
      <aside className="board__steps">
        <ul>
          {money.map((stp, idx) => <li id={idx === step ? 'current_step' : ''} key={stp}>{stp}</li>)}
        </ul>
      </aside>
    </div>
  );
}

export default Questions;
