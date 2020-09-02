import React from "react";
import { decodeHashString } from "../helpers/decodeHashString";
import Answer from "./Answer";

const QuestionDisplay = ({
  handleNextQuestion,
  handleAnswer,
  showAnswers,
  data: { question, correct_answer, all_answers },
}) => {
  return (
    <>
      <div className="question">{decodeHashString(question)}</div>
      {all_answers.map((answer, index) => {
        const buttonColor = showAnswers
          ? answer === correct_answer
            ? "green"
            : "red"
          : "yellow";
        return (
          <Answer
            buttonColor={buttonColor}
            handleAnswer={handleAnswer}
            answer={answer}
            key={index}
          />
        );
      })}
      {showAnswers ? (
        <>
          <button className="button buttonNext" onClick={handleNextQuestion}>
            Next Question
          </button>
        </>
      ) : (
        <button className="button placeholder">Next Question</button>
      )}
    </>
  );
};
export default QuestionDisplay;
