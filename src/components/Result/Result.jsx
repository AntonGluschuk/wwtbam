import React from 'react';
import { Link } from 'react-router-dom';
import './css/Result.css';
import handLogo from './images/hand1.png';

function Result({ result }) {
  return (
    <div className="result">
      <img src={handLogo} alt="hand" />
      <div className="main_result">
        <h2>Total score:</h2>
        <h1>{`${result} earned`}</h1>
        <Link to="/"><button type="submit">Try again</button></Link>
      </div>
    </div>
  );
}

export default Result;
