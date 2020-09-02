import React, { useState, useEffect } from "react";
import QuestionDisplay from "./components/QuestionDisplay";
import Results from "./components/Results";
import Progress from "./components/Progress";
import Loading from "./components/Loading";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

function App() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [restart, setRestart] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  //fetch data from API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((singleQuestion) => ({
          ...singleQuestion,
          all_answers: [
            singleQuestion.correct_answer,
            ...singleQuestion.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, [restart]);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      //user's answer validation
      if (answer === questions[currentIndex].correct_answer) {
        setScore((score) => score + 1);
        setUserAnswers((array) => [...array, "good"]);
      } else {
        setUserAnswers((array) => [...array, "bad"]);
      }
    }
    setShowAnswers(true);
  };
  // next question button logic
  const handleNextQuestion = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    if (newIndex >= questions.length) {
      setQuizFinished(true);
    }
    setShowAnswers(false);
  };
  //reset every state after Restart button click
  const gameRerun = () => {
    setQuizFinished(false);
    setScore(0);
    setCurrentIndex(0);
    setQuestions([]);
    setUserAnswers([]);
    setRestart(!restart);
  };
  // rendering part
  // if user finished the quiz --> render this
  if (quizFinished) {
    return (
      <>
        <div className="logo">Quiz</div>
        <div className="container">
          <Results score={score} handleRestart={gameRerun} />
        </div>
      </>
    );
    // if API call worked --> render this
  } else if (questions.length > 0) {
    return (
      <>
        <div className="logo">Quiz</div>
        <div className="container">
          <div className="containerQuiz">
            <Progress
              score={score}
              currentIndex={currentIndex}
              userAnswersArray={userAnswers}
            />
            <QuestionDisplay
              data={questions[currentIndex]}
              handleAnswer={handleAnswer}
              showAnswers={showAnswers}
              handleNextQuestion={handleNextQuestion}
            />
          </div>
        </div>
      </>
    );
    // if API is processing --> render this
  } else {
    return <Loading />;
  }
}
export default App;
