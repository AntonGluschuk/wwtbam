import React, { useContext } from 'react';
import './css/Questions.css';
import { GameContext } from '../../Context/Context';

function Questions() {
  const {
    config,
    step,
    questions,
    handleAnswer,
    showAnswer,
    showSide,
    setShowSide,

  } = useContext(GameContext);

  const {
    question,
    incorrect_answers,
    correct_answer,
  } = questions[step];

  const [letters, money] = config;

  const shakeAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return (
    <section className="board">
      <main className="board__game">
        <button className="board__icon" type="button" aria-label="Open" onClick={() => setShowSide(!showSide)}>☰</button>
        <h3 className="board__question" dangerouslySetInnerHTML={{ __html: question }} />
        <div className="board__answers">
          {shakeAnswers.map((answer, idx) => {
            const bgAnswer = showAnswer ? answer === correct_answer ? 'correct_answer'
              : 'wrong_answer'
              : null;
            return (
              <button className={`board__answer_btn ${bgAnswer}`} key={letters[idx]} onClick={() => handleAnswer(answer)} type="submit">
                <span className="board__answer_letter">{letters[idx]}</span>
                <p className="board__answer" dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            );
          })}
        </div>
      </main>
      <aside className={`${showSide ? 'board__steps board__steps_active' : 'board__steps'}`}>
        <button className="board__icon_close" type="button" aria-label="Open" onClick={() => setShowSide(!showSide)}>X</button>
        <ul className="board__steps_list">
          {money.map((stp, idx) => <li className={idx === step ? ' board__steps_item current_step' : 'board__steps_item'} key={stp}>{stp}</li>)}
        </ul>
      </aside>
    </section>
  );
}

export default Questions;
