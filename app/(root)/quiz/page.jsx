"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // useSearchParams to get query params

const Quiz = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the query params
  const [topic, setTopic] = useState(null); // State to store the topic after it's available
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    console.log('Router: ', router);
    console.log('Search Params:', searchParams);

    const topicParam = searchParams.get('topic'); // Get 'topic' from URL query params
    if (topicParam) {
      setTopic(topicParam); // Set topic when it becomes available
    } else {
      console.log("Topic not found in query params.");
    }
  }, [searchParams]);

  // Static quiz questions (can be based on the topic)
  const questions = {
    'personal-finance': [
      {
        questionText: 'What is a budget?',
        options: [
          { answerText: 'A plan for saving and spending money', isCorrect: true },
          { answerText: 'A list of all your assets', isCorrect: false },
          { answerText: 'A tax document', isCorrect: false },
        ],
      },
      {
        questionText: 'What is an emergency fund?',
        options: [
          { answerText: 'A fund for luxury purchases', isCorrect: false },
          { answerText: 'Savings set aside for unexpected expenses', isCorrect: true },
          { answerText: 'A government program', isCorrect: false },
        ],
      },
    ],
    'investment-options': [
      {
        questionText: 'Which of the following is a low-risk investment?',
        options: [
          { answerText: 'Stocks', isCorrect: false },
          { answerText: 'Bonds', isCorrect: true },
          { answerText: 'Cryptocurrency', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a mutual fund?',
        options: [
          { answerText: 'A collection of stocks and bonds managed by a professional', isCorrect: true },
          { answerText: 'An insurance policy', isCorrect: false },
          { answerText: 'A type of credit card', isCorrect: false },
        ],
      },
    ],
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[topic]?.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (!topic) {
    return <div>Loading...</div>; // Display loading until topic is available
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        {topic.replace('-', ' ').toUpperCase()}
      </h2>
      {showScore ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md">
          You scored {score} out of {questions[topic]?.length}
        </div>
      ) : (
        <>
          <div className="bg-white p-6 shadow-md rounded-md w-96 mb-4">
            <div className="text-lg mb-4">
              {questions[topic]?.[currentQuestion]?.questionText || 'No questions available'}
            </div>
            <div className="flex flex-col gap-3">
              {questions[topic]?.[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => router.push('/')}
        className="text-blue-500 underline mt-4"
      >
        Go back
      </button>
    </div>
  );
};

export default Quiz;
