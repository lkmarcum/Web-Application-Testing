import React, { useState, useEffect } from "react";

function Display() {
  const [count, setCount] = useState({ strikes: 0, balls: 0 });

  function addStrike() {
    setCount({ strikes: strikes + 1, balls: balls });
  }

  function addBall() {
    setCount({ strikes: strikes, balls: balls + 1 });
  }

  function resetCount() {
    setCount({ strikes: 0, balls: 0 });
  }

  function foulBall() {
    setCount({ strikes: strikes + 1, balls: balls });
  }

  return (
    <div className="display">
      <h1>At-Bat Count</h1>
      <div className="count-container">
        <div className="ball-container">
          <h3>Balls</h3>
          <p>{count.balls}</p>
        </div>
        <p>-</p>
        <div className="strike-container">
          <h3>Strikes</h3>
          <p>{count.strikes}</p>
        </div>
      </div>
    </div>
  );
}
