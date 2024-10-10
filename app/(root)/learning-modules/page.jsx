import Link from 'next/link';

const LearningModules = () => {
  const topics = [
    {
      title: 'Meet the Characters in Your Financial Story',
      description:
        'Understand key figures and roles in your personal financial journey, including yourself, financial advisors, and institutions.',
      link: '/learning-modules/zero/meet-the-characters',
    },
    {
      title: 'Why Personal Finance Matters',
      description:
        'Explore the importance of managing your money, making informed decisions, and how it impacts your future.',
      link: '/learning-modules/why-personal-finance-matters',
    },
    {
      title: 'Stepping into Financial Adulthood',
      description:
        'Discover the financial responsibilities and opportunities that come with adulthood, including legal and financial independence.',
      link: '/learning-modules/financial-adulthood',
    },
    {
      title: 'Exploring Various Investment Options',
      description:
        'Dive into the world of investments including mutual funds, stocks, commodities, REITs, and properties to grow your wealth.',
      link: '/learning-modules/investment-options',
    },
    {
      title: 'Understanding Compounding and Investment Effects',
      description:
        'Gain insights into how compounding and other technical factors can significantly impact your investment returns.',
      link: '/learning-modules/compounding-investment-effects',
    },
    {
      title: 'Fundamental Analysis',
      description:
        'Learn to assess the intrinsic value of investments by analyzing financial statements, company performance, and economic indicators.',
      link: '/learning-modules/fundamental-analysis',
    },
    {
      title: 'Technical Analysis',
      description:
        'Understand how to predict future market movements based on historical price patterns and market data.',
      link: '/learning-modules/technical-analysis',
    },
    {
      title: 'Assessing Risk Profiles',
      description:
        'Evaluate your risk tolerance and learn how to choose mutual funds that align with your financial goals and risk appetite.',
      link: '/learning-modules/assessing-risk-profiles',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        The Financial Literacy Odyssey
      </h1>
      <p className="text-center text-lg text-gray-700 mb-5">
        Embark on an odyssey towards financial independence, a journey tailored to guide you through the fundamentals and into the advanced realms of financial knowledge.
      </p>
      <div className="text-center mb-5">
        <button className="bg-purple-700 text-white px-4 py-2 rounded-full mx-2">ZERO</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-full mx-2">MEDIUM</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-full mx-2">ADVANCE</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4">{topic.title}</h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <Link href={topic.link} className="text-purple-700 font-semibold">
              Find out more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModules;
