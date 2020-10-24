import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import Start from './components/Start/Start';

function App() {
  const APIURL = 'https://opentdb.com/api.php?amount=12&type=multiple';
  const money = ['$500', '$1,000', '$2,000',
    '$4,000', '$8,000', '$16,000', '$32,000',
    '$64,000', '$125,000', '$250,000', '$500,000', '$1,000,000'];
  const letters = ['A', 'B', 'C', 'D'];
  const [config, setConfig] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    fetch(APIURL)
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data.results);
        console.log(data.results);
        const handledData = data.results.map((singleData) => ({
          correct_answer: singleData.correct_answer,
          answers: [singleData.correct_answer, ...singleData.incorrect_answers],
        }));
        setConfig([letters, money, ...handledData]);
      });
  }, []);

  const handleAnswer = (answer) => {
    const nextStep = step + 1;
    setStep(nextStep);
    if (answer === questions[step].correct_answer) {
      setScore(score + 1);
    }
    if (nextStep >= questions.length) {
      setGameEnd(true);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        {config.length > 0 ? (
          <Route path="/game">
            <Game
              config={config}
              questions={questions[step]}
              step={step}
              handleAnswer={handleAnswer}
            />
          </Route>
        ) : null}
        <Route path="/result">
          <Result result={score} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
