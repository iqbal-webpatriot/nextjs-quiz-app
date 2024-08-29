"use client";
import { QUESTIONS_DATA } from "@/data/question";
import { getCustomeQuizData } from "@/data/quiz-data";
import { useAppSelector } from "@/Redux/App/hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SkeletonPlaceholder = () => (
  <div className="w-full max-w-lg bg-gray-300 animate-pulse p-6 rounded-lg shadow-lg space-y-6 flex flex-col items-center max-h-[90vh]">
    <div className="mb-4 text-center w-full">
      <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto mb-2"></div>
    </div>
    <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
    <div className="w-full space-y-4">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-full p-4 rounded-lg bg-gray-400"
          ></div>
        ))}
    </div>
    <div className="flex justify-center mt-6 w-full">
      <div className="px-6 py-3 bg-gray-400 rounded-lg w-full max-w-xs"></div>
    </div>
  </div>
);

const TestPage = () => {
  const search = useSearchParams();
  const slug = search.get("topic");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const {selectedExperience,selectedRole,selectedTopics}=useAppSelector((store)=>store.commonStore);
   if(selectedTopics && selectedRole && selectedExperience){
     const filteredQusizdata = getCustomeQuizData(selectedRole?.[0]?.title?.split('')?.[0],'','')
   }

  // Get questions for the selected slug
  const questions = slug ? QUESTIONS_DATA[slug as string] : undefined;
  const currentQuestion = questions && questions[currentQuestionIndex];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an option !");
      return;
    }
    if (selectedAnswer === currentQuestion?.answer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-purple-300 to-purple-500 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
        {!currentQuestion && currentQuestionIndex === questions?.length
          ? "Quiz Over!"
          : "Quiz Time!"}
      </h1>

      {loading ? (
        <SkeletonPlaceholder />
      ) : (
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
                href={`/result?correctAnswers=${correctAnswers}&totalQuestions=${questions.length}`}
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
      )}
    </div>
  );
};

export default TestPage;
