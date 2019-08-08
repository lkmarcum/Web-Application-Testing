import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Display() {
  const [count, setCount] = useState({ strikes: 0, balls: 0 });

  function addStrike() {
    if (count.strikes === 2) {
      resetCount();
    } else {
      const tempStrike = count.strikes;
      const tempBalls = count.balls;
      setCount({ strikes: tempStrike + 1, balls: tempBalls });
    }
  }

  function addBall() {
    if (count.balls === 3) {
      resetCount();
    } else {
      const tempStrike = count.strikes;
      const tempBalls = count.balls;
      setCount({ strikes: tempStrike, balls: tempBalls + 1 });
    }
  }

  function resetCount() {
    setCount({ strikes: 0, balls: 0 });
  }

  function foulBall() {
    if (count.strikes === 2) {
      return;
    } else {
      const tempStrike = count.strikes;
      const tempBalls = count.balls;
      setCount({ strikes: tempStrike + 1, balls: tempBalls });
    }
  }

  return (
    <div>
      <div className="display-container">
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
      <div className="dashboard-container">
        <Dashboard
          addStrike={addStrike}
          addBall={addBall}
          resetCount={resetCount}
          foulBall={foulBall}
        />
      </div>
    </div>
  );
}

export default Display;
