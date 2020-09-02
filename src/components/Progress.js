import React from "react";

export default function Progress({ score, currentIndex, userAnswersArray }) {
  return (
    <>
      <div className="progress">
        <p>Score: {score}</p>
        <p>Progress: {currentIndex + 1}/10</p>
      </div>
      <div className="progressMeter">
        <ul className="progressMeterBoxes">
          <>
            {userAnswersArray.map((value, index) => {
              {
                return value === "good" ? (
                  <li key={index} className="progressMetterSingleBox green">
                    ✔
                  </li>
                ) : (
                  <li key={index} className="progressMetterSingleBox red">
                    ✘
                  </li>
                );
              }
            })}
          </>
        </ul>
      </div>
    </>
  );
}
