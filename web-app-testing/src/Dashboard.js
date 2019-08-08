import React from "react";

function Dashboard(props) {
  return (
    <div className="button-container">
      <button data-testid="ball-button" onClick={() => props.addBall()}>
        Ball
      </button>
      <button data-testid="strike-button" onClick={() => props.addStrike()}>
        Strike
      </button>
      <button data-testid="foul-button" onClick={() => props.foulBall()}>
        Foul Ball
      </button>
      <button data-testid="hit-button" onClick={() => props.resetCount()}>
        Hit
      </button>
    </div>
  );
}

export default Dashboard;
