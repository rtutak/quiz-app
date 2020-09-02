import React from "react";
import { decodeHashString } from "../helpers/decodeHashString";

export default function Answers({ buttonColor, handleAnswer, answer }) {
  return (
    <>
      <button
        className={`button ${buttonColor}`}
        onClick={() => handleAnswer(answer)}
      >
        {decodeHashString(answer)}
      </button>
    </>
  );
}
