import React from "react";

function Dashboard(props) {
  return (
    <div className="button-container">
      <button onClick={() => props.addBall()}>Ball</button>
      <button onClick={() => props.addStrike()}>Strike</button>
      <button onClick={() => props.foulBall()}>Foul Ball</button>
      <button onClick={() => props.resetCount()}>Hit</button>
    </div>
  );
}

export default Dashboard;
