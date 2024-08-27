"use client";
import { QUESTIONS_DATA } from "@/data/question";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// app/test/page.tsx
import { useState } from "react";

const TestPage = () => {
  const search = useSearchParams();
  const slug = search.get("topic");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // Get questions for the selected slug
  const questions = slug ? QUESTIONS_DATA[slug as string] : undefined;
  console.log("questions: ", questions);
  const currentQuestion = questions && questions[currentQuestionIndex];
  console.log("currentQuestion: ", currentQuestion);
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  console.log("selectedAnswer: ", selectedAnswer);

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an option!");
      return;
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-purple-300 to-purple-500 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
        {!currentQuestion && currentQuestionIndex === questions?.length
          ? "Quiz Over !"
          : "Quiz Time!"}
      </h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-6 flex flex-col items-center max-h-[90vh] overflow-auto">
        {currentQuestion ? (
          <>
            <div className="mb-4 text-center w-full">
              <p className="text-lg font-semibold text-purple-700">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {currentQuestion.question}
            </h2>

            <div className="w-full space-y-4">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-2 rounded-lg border-2 transition-transform transform ${
                    selectedAnswer === option
                      ? "bg-blue-600 text-white border-blue-600 scale-105"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-6 w-full">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors w-full max-w-xs"
              >
                Next Question
              </button>
            </div>
          </>
        ) : currentQuestionIndex === questions?.length ? (
          <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg font-semibold text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            Congratulations 🚀 You have completed the test. <br />
            <Link
              className="text-blue-600 ml-2"
              href={`/result?correctAnswers=${5}&totalQuestions=${10}`}
            >
              View Score
            </Link>
          </div>
        ) : (
          <p className="text-lg text-gray-700 text-center">
            No more questions available on this topic.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestPage;
