import React from 'react';

function Questions({
  config: [letters, money,
    {
      answers, correct_answer,
    },
  ],
  questions:
    {
      question,
    },
  step,
  handleAnswer,
}) {
  const shakeAnswers = [...answers].sort(() => Math.random() - 0.5);
  return (
    <div className="board">
      <main className="board__game">
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="board__answers">
          {shakeAnswers.map((answer, idx) => (
            <button key={letters[idx]} id={answer === correct_answer ? 'correct_answer' : ''} onClick={() => handleAnswer(answer)} type="submit">
              <span>{letters[idx]}</span>
              <p dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          ))}
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
