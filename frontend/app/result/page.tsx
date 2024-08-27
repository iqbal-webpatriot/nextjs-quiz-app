"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage() {
    const router = useRouter();
    const searchParms=useSearchParams();
    const correctAnswers=Number(searchParms.get('correctAnswers'));
    const totalQuestions=Number(searchParms.get('totalQuestions'));


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Quiz Results
        </h1>
        
        <div className="text-center">
  {correctAnswers === 0 ? (
    <p className="text-lg font-medium text-gray-700">
      Unfortunately, you didn't get any answers correct. Better luck next time!
    </p>
  ) : (
    <p className="text-lg font-medium text-gray-700">
      You answered
      <span className="text-purple-600 font-semibold"> {correctAnswers} </span>
      out of
      <span className="text-purple-600 font-semibold"> {totalQuestions} </span>
      questions correctly!
    </p>
  )}

  <div className="mt-4">
    {correctAnswers === 0 && (
      <p className="text-red-500 font-bold text-2xl">Failed 😞</p>
    )}
    {correctAnswers > 0 && correctAnswers / totalQuestions < 0.3 && (
      <p className="text-red-500 font-bold text-2xl">Failed 😞</p>
    )}
    {correctAnswers / totalQuestions >= 0.3 && correctAnswers / totalQuestions < 0.8 && (
      <p className="text-yellow-500 font-bold text-2xl">Need Improvement 😊</p>
    )}
    {correctAnswers / totalQuestions >= 0.8 && (
      <p className="text-green-500 font-bold text-2xl">Pass 🎉</p>
    )}
  </div>
</div>

        <div className="flex justify-center">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
