import React from "react";

export default function Loading() {
  return (
    <>
      <div className="logo">Quiz</div>
      <div className="container">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
        <h1>Loading questions...</h1>
      </div>
    </>
  );
}
