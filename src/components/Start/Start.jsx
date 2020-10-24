import React from 'react';
import { Link } from 'react-router-dom';
import './css/Start.css';
import handLogo from './images/hand1.png';

function Start() {
  return (
    <div className="main">
      <img src={handLogo} alt="hand" />
      <div className="main_start">
        <h1>Who wants to be a millionaire?</h1>
        <Link to="/game"><button type="submit">Start</button></Link>
      </div>
    </div>
  );
}

export default Start;
