import React from "react";

export default function Results({ score, handleRestart }) {
  return (
    <>
      <div className="flexColumn">
        <h1>Quiz Finished!</h1>
        <h1>Score: {score}</h1>
        <button className="button" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    </>
  );
}
