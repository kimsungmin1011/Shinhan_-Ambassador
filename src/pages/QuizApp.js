import React, { useState } from 'react';
import quizData from './data';
import './style/QuizApp.css'; // 스타일 파일 불러오기

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
    <br /><br /><br />
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          총 {quizData.length}문제 중 당신은 {score}문제를 맞췄습니다!
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              질문 {currentQuestion + 1} / {quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default QuizApp;
