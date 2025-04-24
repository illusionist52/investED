"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
  const router = useRouter();
  const searchParams = useSearchParams();
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
    'inflation': [
    {
      questionText: 'What is inflation?',
      options: [
        { answerText: 'A general increase in prices and fall in the purchasing value of money', isCorrect: true },
        { answerText: 'A decrease in the cost of living', isCorrect: false },
        { answerText: 'A drop in interest rates', isCorrect: false },
        { answerText: 'An increase in employment levels', isCorrect: false }
      ]
    },
    {
      questionText: 'Which index is commonly used to measure inflation?',
      options: [
        { answerText: 'Consumer Price Index (CPI)', isCorrect: true },
        { answerText: 'Gross Domestic Product (GDP)', isCorrect: false },
        { answerText: 'Unemployment Rate', isCorrect: false },
        { answerText: 'Stock Market Index', isCorrect: false }
      ]
    },
    {
      questionText: 'Which of the following can be a cause of inflation?',
      options: [
        { answerText: 'Increase in production costs', isCorrect: true },
        { answerText: 'Decrease in money supply', isCorrect: false },
        { answerText: 'Higher unemployment', isCorrect: false },
        { answerText: 'Lower consumer demand', isCorrect: false }
      ]
    },
    {
      questionText: 'Which type of inflation is caused by increased demand for goods and services?',
      options: [
        { answerText: 'Demand-pull inflation', isCorrect: true },
        { answerText: 'Cost-push inflation', isCorrect: false },
        { answerText: 'Stagflation', isCorrect: false },
        { answerText: 'Deflation', isCorrect: false }
      ]
    },
    {
      questionText: 'What is stagflation?',
      options: [
        { answerText: 'A combination of high inflation and stagnant economic growth', isCorrect: true },
        { answerText: 'A period of zero inflation', isCorrect: false },
        { answerText: 'Inflation with rapidly growing GDP', isCorrect: false },
        { answerText: 'Deflation accompanied by high growth', isCorrect: false }
      ]
    },
    {
      questionText: 'Which of the following is a possible effect of inflation?',
      options: [
        { answerText: 'Decreased purchasing power', isCorrect: true },
        { answerText: 'Stable currency value', isCorrect: false },
        { answerText: 'Increase in real income', isCorrect: false },
        { answerText: 'Falling interest rates', isCorrect: false }
      ]
    },
    {
      questionText: 'How can central banks control inflation?',
      options: [
        { answerText: 'By increasing interest rates', isCorrect: true },
        { answerText: 'By printing more money', isCorrect: false },
        { answerText: 'By reducing taxes', isCorrect: false },
        { answerText: 'By increasing government spending', isCorrect: false }
      ]
    }
  ],
  'time-value-of-money': [
  {
    questionText: 'What does the Time Value of Money (TVM) concept imply?',
    options: [
      { answerText: 'Money available today is worth more than the same amount in the future', isCorrect: true },
      { answerText: 'Money loses value only during inflation', isCorrect: false },
      { answerText: 'Money gains value automatically over time', isCorrect: false },
      { answerText: 'Future money has more value due to inflation', isCorrect: false }
    ]
  },
  {
    questionText: 'Which formula is used to calculate the future value of a lump sum?',
    options: [
      { answerText: 'FV = PV × (1 + r)^n', isCorrect: true },
      { answerText: 'FV = PV ÷ (1 + r)^n', isCorrect: false },
      { answerText: 'FV = PV × r × n', isCorrect: false },
      { answerText: 'FV = PV + n', isCorrect: false }
    ]
  },
  {
    questionText: 'What does "r" represent in the TVM formula?',
    options: [
      { answerText: 'Interest rate per period', isCorrect: true },
      { answerText: 'Number of years', isCorrect: false },
      { answerText: 'Present value', isCorrect: false },
      { answerText: 'Future value', isCorrect: false }
    ]
  },
  {
    questionText: 'Which of the following affects the time value of money?',
    options: [
      { answerText: 'Interest rate', isCorrect: true },
      { answerText: 'Current employment', isCorrect: false },
      { answerText: 'Political stability', isCorrect: false },
      { answerText: 'Tax rate', isCorrect: false }
    ]
  },
  {
    questionText: 'What is present value (PV)?',
    options: [
      { answerText: 'The current worth of a future sum of money', isCorrect: true },
      { answerText: 'The value of money after investment', isCorrect: false },
      { answerText: 'The face value of currency', isCorrect: false },
      { answerText: 'The price of a product today', isCorrect: false }
    ]
  },
  {
    questionText: 'What is annuity in context of TVM?',
    options: [
      { answerText: 'A series of equal payments made at regular intervals', isCorrect: true },
      { answerText: 'A one-time investment', isCorrect: false },
      { answerText: 'A bank loan', isCorrect: false },
      { answerText: 'A government bond', isCorrect: false }
    ]
  },
  {
    questionText: 'Why is discounting used in TVM calculations?',
    options: [
      { answerText: 'To find the present value of future cash flows', isCorrect: true },
      { answerText: 'To inflate future cash flows', isCorrect: false },
      { answerText: 'To increase the value of money', isCorrect: false },
      { answerText: 'To avoid paying interest', isCorrect: false }
    ]
  }
],
'monetary-policy-inflation': [
  {
    questionText: 'What is the main objective of monetary policy?',
    options: [
      { answerText: 'To control inflation and stabilize the currency', isCorrect: true },
      { answerText: 'To increase taxes', isCorrect: false },
      { answerText: 'To promote exports only', isCorrect: false },
      { answerText: 'To reduce the fiscal deficit', isCorrect: false }
    ]
  },
  {
    questionText: 'Which institution typically formulates monetary policy in a country?',
    options: [
      { answerText: 'Central bank', isCorrect: true },
      { answerText: 'Commercial banks', isCorrect: false },
      { answerText: 'Ministry of Finance', isCorrect: false },
      { answerText: 'Stock exchange', isCorrect: false }
    ]
  },
  {
    questionText: 'What happens when a central bank increases interest rates?',
    options: [
      { answerText: 'Borrowing becomes more expensive, reducing spending', isCorrect: true },
      { answerText: 'Inflation increases', isCorrect: false },
      { answerText: 'Money supply increases rapidly', isCorrect: false },
      { answerText: 'Stock market booms automatically', isCorrect: false }
    ]
  },
  {
    questionText: 'Which of the following is an expansionary monetary policy tool?',
    options: [
      { answerText: 'Lowering the interest rate', isCorrect: true },
      { answerText: 'Raising reserve requirements', isCorrect: false },
      { answerText: 'Increasing policy rates', isCorrect: false },
      { answerText: 'Selling government bonds', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the Cash Reserve Ratio (CRR)?',
    options: [
      { answerText: 'The percentage of deposits banks must keep with the central bank', isCorrect: true },
      { answerText: 'The interest rate on government loans', isCorrect: false },
      { answerText: 'The rate charged by banks to customers', isCorrect: false },
      { answerText: 'The inflation rate of the economy', isCorrect: false }
    ]
  },
  {
    questionText: 'Which tool is used by central banks to absorb excess liquidity?',
    options: [
      { answerText: 'Open Market Operations (OMOs)', isCorrect: true },
      { answerText: 'Public borrowing', isCorrect: false },
      { answerText: 'Credit guarantees', isCorrect: false },
      { answerText: 'Subsidies', isCorrect: false }
    ]
  },
  {
    questionText: 'How does monetary policy affect inflation?',
    options: [
      { answerText: 'By controlling money supply and influencing interest rates', isCorrect: true },
      { answerText: 'By directly setting product prices', isCorrect: false },
      { answerText: 'Through trade agreements', isCorrect: false },
      { answerText: 'Via employment programs', isCorrect: false }
    ]
  }
],
'hyperinflation': [
  {
    questionText: 'What defines hyperinflation?',
    options: [
      { answerText: 'A monthly inflation rate exceeding 50%', isCorrect: true },
      { answerText: 'An annual inflation rate of 5%', isCorrect: false },
      { answerText: 'A rise in prices over several years', isCorrect: false },
      { answerText: 'A one-time increase in fuel prices', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the primary cause of hyperinflation?',
    options: [
      { answerText: 'Excessive printing of money by the government', isCorrect: true },
      { answerText: 'A surge in gold reserves', isCorrect: false },
      { answerText: 'High levels of foreign investment', isCorrect: false },
      { answerText: 'Balanced budgets and trade surpluses', isCorrect: false }
    ]
  },
  {
    questionText: 'Which of the following is a likely outcome of hyperinflation?',
    options: [
      { answerText: 'Loss of purchasing power and currency value', isCorrect: true },
      { answerText: 'Increase in real wages', isCorrect: false },
      { answerText: 'Stable interest rates', isCorrect: false },
      { answerText: 'Stronger banking systems', isCorrect: false }
    ]
  },
  {
    questionText: 'Which historical event is most associated with hyperinflation?',
    options: [
      { answerText: 'Weimar Republic in the 1920s', isCorrect: true },
      { answerText: 'The US Great Depression', isCorrect: false },
      { answerText: 'Post-WWII economic boom', isCorrect: false },
      { answerText: 'The Industrial Revolution', isCorrect: false }
    ]
  },
  {
    questionText: 'How do citizens typically react during hyperinflation?',
    options: [
      { answerText: 'They spend money quickly before it loses value', isCorrect: true },
      { answerText: 'They hold onto money to earn interest', isCorrect: false },
      { answerText: 'They invest in local currency bonds', isCorrect: false },
      { answerText: 'They increase long-term savings', isCorrect: false }
    ]
  },
  {
    questionText: 'What measure can governments take to stop hyperinflation?',
    options: [
      { answerText: 'Introduce a new currency or peg it to a stable one', isCorrect: true },
      { answerText: 'Increase minimum wages', isCorrect: false },
      { answerText: 'Subsidize consumer goods', isCorrect: false },
      { answerText: 'Cut taxes for the rich', isCorrect: false }
    ]
  },
  {
    questionText: 'Which country experienced hyperinflation in the 2000s with prices doubling every day?',
    options: [
      { answerText: 'Zimbabwe', isCorrect: true },
      { answerText: 'India', isCorrect: false },
      { answerText: 'United Kingdom', isCorrect: false },
      { answerText: 'China', isCorrect: false }
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