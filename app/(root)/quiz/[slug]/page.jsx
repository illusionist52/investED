"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { incrementVC } from '@/api/incrementVC';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const Quiz = ({ params }) => {
  const { slug } = params;
  console.log("Slug - ", slug)
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Static quiz questions categorized by slug
  const questions = {
    'banking-basics': [
      {
        questionText: 'What is a savings account?',
        options: [
          { answerText: 'A type of account designed to store money and earn interest', isCorrect: true },
          { answerText: 'A loan given to buy a house', isCorrect: false },
          { answerText: 'An account for daily transactions without interest', isCorrect: false }
        ]
      },
      {
        questionText: 'What is a fixed deposit (FD) account?',
        options: [
          { answerText: 'An account where money is deposited for a fixed period with a guaranteed return', isCorrect: true },
          { answerText: 'A credit card with fixed spending limits', isCorrect: false },
          { answerText: 'A bank account with no withdrawal limits', isCorrect: false }
        ]
      },
      {
        questionText: 'What is a home loan?',
        options: [
          { answerText: 'A loan to purchase a house, with the property used as collateral', isCorrect: true },
          { answerText: 'A loan for buying a car', isCorrect: false },
          { answerText: 'A loan for daily expenses', isCorrect: false }
        ]
      },
      {
        questionText: 'What is a credit score?',
        options: [
          { answerText: 'A number that reflects your creditworthiness', isCorrect: true },
          { answerText: 'A document listing your bank accounts', isCorrect: false },
          { answerText: 'A tax ID number issued by the government', isCorrect: false }
        ]
      }
    ],
    'budgeting-personal-finance': [
      {
        questionText: 'What is a budget?',
        options: [
          { answerText: 'A plan to spend your money', isCorrect: true },
          { answerText: 'A record of your debts', isCorrect: false },
          { answerText: 'A method for saving money', isCorrect: false },
          { answerText: 'An investment strategy', isCorrect: false }
        ]
      },
      {
        questionText: 'How often do individuals typically prepare budgets?',
        options: [
          { answerText: 'Weekly', isCorrect: false },
          { answerText: 'Monthly', isCorrect: true },
          { answerText: 'Quarterly', isCorrect: false },
          { answerText: 'Annually', isCorrect: false }
        ]
      },
      {
        questionText: 'What are the two main types of budgets?',
        options: [
          { answerText: 'Fixed and Variable', isCorrect: false },
          { answerText: 'Static and Flexible', isCorrect: true },
          { answerText: 'Long-term and Short-term', isCorrect: false },
          { answerText: 'Personal and Business', isCorrect: false }
        ]
      },
      {
        questionText: 'Why is budgeting important?',
        options: [
          { answerText: 'It promotes financial discipline', isCorrect: false },
          { answerText: 'It helps avoid unnecessary expenses', isCorrect: false },
          { answerText: 'It prepares you for emergencies', isCorrect: false },
          { answerText: 'All of the above', isCorrect: true }
        ]
      },
      {
        questionText: 'What is personal finance?',
        options: [
          { answerText: 'Managing investments only', isCorrect: false },
          { answerText: 'Managing money, including saving, spending, and investing', isCorrect: true },
          { answerText: 'Planning for retirement only', isCorrect: false },
          { answerText: 'Creating a budget', isCorrect: false }
        ]
      },
      {
        questionText: 'Which of the following is NOT an area of personal finance?',
        options: [
          { answerText: 'Income', isCorrect: false },
          { answerText: 'Spending', isCorrect: false },
          { answerText: 'Gambling', isCorrect: true },
          { answerText: 'Saving', isCorrect: false }
        ]
      },
      {
        questionText: 'What does the 50/30/20 budgeting rule suggest?',
        options: [
          { answerText: '50% for savings, 30% for essentials, 20% for debt', isCorrect: false },
          { answerText: '50% for essentials, 30% for discretionary spending, 20% for savings', isCorrect: true },
          { answerText: '50% for discretionary spending, 30% for savings, 20% for essentials', isCorrect: false },
          { answerText: '50% for debt repayment, 30% for living expenses, 20% for investments', isCorrect: false }
        ]
      }
    ],
    'hyperinflation': [
      {
        questionText: 'What is hyperinflation?',
        options: [
          { answerText: 'A rapid and uncontrolled rise in prices exceeding 50% per month', isCorrect: true },
          { answerText: 'A slow increase in prices over several years', isCorrect: false },
          { answerText: 'A stable economy with low inflation rates', isCorrect: false },
          { answerText: 'A decrease in the value of money over time', isCorrect: false }
        ]
      },
      {
        questionText: 'What typically causes hyperinflation?',
        options: [
          { answerText: 'Excessive supply of money due to government printing', isCorrect: true },
          { answerText: 'Increased production of goods', isCorrect: false },
          { answerText: 'Foreign investments', isCorrect: false },
          { answerText: 'Stable political conditions', isCorrect: false }
        ]
      },
      {
        questionText: 'Which of the following is a consequence of hyperinflation?',
        options: [
          { answerText: 'Erosion of the real value of savings and wages', isCorrect: true },
          { answerText: 'Increase in purchasing power', isCorrect: false },
          { answerText: 'Stability in the banking system', isCorrect: false },
          { answerText: 'Increase in foreign investments', isCorrect: false }
        ]
      },
      {
        questionText: 'What drastic measures might governments take in response to hyperinflation?',
        options: [
          { answerText: 'Currency redenomination or pegging to a stable currency', isCorrect: true },
          { answerText: 'Lowering interest rates significantly', isCorrect: false },
          { answerText: 'Increasing taxes drastically', isCorrect: false },
          { answerText: 'Encouraging excessive spending', isCorrect: false }
        ]
      },
      {
        questionText: 'Which country is NOT famously associated with hyperinflation?',
        options: [
          { answerText: 'Weimar Republic (Germany)', isCorrect: false },
          { answerText: 'Zimbabwe', isCorrect: false },
          { answerText: 'Venezuela', isCorrect: false },
          { answerText: 'Japan', isCorrect: true }
        ]
      },
      {
        questionText: 'What happens when people lose confidence in a currency during hyperinflation?',
        options: [
          { answerText: 'They hold onto it longer', isCorrect: false },
          { answerText: 'They exchange it for goods and services quickly', isCorrect: true },
          { answerText: 'They invest it in the stock market', isCorrect: false },
          { answerText: 'They save it in bank accounts', isCorrect: false }
        ]
      },
      {
        questionText: 'In which decade did hyperinflation famously occur in the Weimar Republic?',
        options: [
          { answerText: '1910s', isCorrect: false },
          { answerText: '1920s', isCorrect: true },
          { answerText: '1930s', isCorrect: false },
          { answerText: '1940s', isCorrect: false }
        ]
      }
    ]
  };

  const handleAnswerOptionClick = async (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
      setPoints(prev => prev + 10);
      await incrementVC(10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[slug]?.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleConfirmBack = () => {
    setPoints(0);
    router.push('/learning-modules');
  };

  if (!questions[slug]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-12 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 tracking-wide">
        {slug.replace('-', ' ').toUpperCase()}
      </h2>

      {!showScore && (
        <div className="mb-6 text-lg font-medium text-purple-600 bg-purple-50 px-5 py-2 rounded-xl shadow-sm">
          Points: {points}
        </div>
      )}

      {showScore ? (
        <div className="bg-white px-6 py-6 rounded-2xl shadow-lg w-full max-w-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quiz Summary</h3>
          <div className="space-y-3">
            <p className="text-lg text-gray-700">Total Questions: <span className="font-semibold">{questions[slug]?.length}</span></p>
            <p className="text-lg text-gray-700">Correct Answers: <span className="font-semibold text-green-600">{score}</span></p>
            <p className="text-lg text-gray-700">Incorrect Answers: <span className="font-semibold text-red-500">{questions[slug]?.length - score}</span></p>
            <p className="text-lg text-gray-700">Total Points Earned: <span className="font-bold text-blue-600">{points}</span></p>
          </div>
        </div>
      ) : (
        <div className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-lg transition-all">
          <div className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            {questions[slug]?.[currentQuestion]?.questionText || 'No questions available'}
          </div>
          <div className="flex flex-col gap-5">
            {questions[slug]?.[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
                className="border border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition duration-200 text-gray-800 py-3 px-5 rounded-xl text-left font-medium"
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}

      {!showScore  && <Button
        variant="ghost"
        className="mt-6 text-purple-600 hover:underline"
        onClick={() => setShowAlert(true)}
      >
        Go back
      </Button>}

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to go back?</AlertDialogTitle>
            <p className="text-sm text-gray-500">Your current progress and points will be lost.</p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmBack}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Quiz;