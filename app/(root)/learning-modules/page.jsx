// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const LearningModules = () => {
//   const [selectedLevel, setSelectedLevel] = useState('ALL');

//   const topics = [
//     {
//       title: 'Meet the Characters in Your Financial Story',
//       description:
//         'Understand key figures and roles in your personal financial journey, including yourself, financial advisors, and institutions.',
//       slug: 'meet-the-characters', // Changed from link to slug
//       level: 'ZERO',
//       content: 'Hello this is testing101'
//       // modules: 'meet-the-characters'
//     },
//     {
//       title: 'Why Personal Finance Matters',
//       description:
//         'Explore the importance of managing your money, making informed decisions, and how it impacts your future.',
//       slug: 'why-personal-finance-matters', // Changed from link to slug
//       level: 'ZERO',
//       content: 'Hello this is testing101'
//       // modules: 'why-personal-finance-matters'
//     },
//     {
//       title: 'Stepping into Financial Adulthood',
//       description:
//         'Discover the financial responsibilities and opportunities that come with adulthood, including legal and financial independence.',
//       slug: 'financial-adulthood', // Changed from link to slug
//       level: 'ZERO',
//       content: 'Hello this is testing101'

//       // modules: 'financial-adulthood'
//     },
//     {
//       title: 'Exploring Various Investment Options',
//       description:
//         'Dive into the world of investments including mutual funds, stocks, commodities, REITs, and properties to grow your wealth.',
//       slug: 'investment-options', // Changed from link to slug
//       level: 'MEDIUM',
//       content: 'Hello this is testing101'
      
//       // modules: 'investment-options'
//     },
//     {
//       title: 'Understanding Compounding and Investment Effects',
//       description:
//         'Gain insights into how compounding and other technical factors can significantly impact your investment returns.',
//       slug: 'compounding-investment-effects', // Changed from link to slug
//       level: 'MEDIUM',
//       content: 'Hello this is testing101'

//       // modules: 'compounding-investment-effects'
//     },
//     {
//       title: 'Fundamental Analysis',
//       description:
//         'Learn to assess the intrinsic value of investments by analyzing financial statements, company performance, and economic indicators.',
//       slug: 'fundamental-analysis', // Changed from link to slug
//       level: 'ADVANCED',
//       content: 'Hello this is testing101'

//       // modules: 'fundamental-analysis'
//     },
//     {
//       title: 'Technical Analysis',
//       description:
//         'Understand how to predict future market movements based on historical price patterns and market data.',
//       slug: 'technical-analysis', // Changed from link to slug
//       level: 'ADVANCED',
//       content: 'Hello this is testing101'

//       // modules: 'technical-analysis'
//     },
//     {
//       title: 'Assessing Risk Profiles',
//       description:
//         'Evaluate your risk tolerance and learn how to choose mutual funds that align with your financial goals and risk appetite.',
//       slug: 'assessing-risk-profiles', // Changed from link to slug
//       level: 'ADVANCED',
//       content: 'Hello this is testing101'

//       // modules: 'assessing-risk-profiles'
//     },
//   ];

//   // Filter topics based on the selected level
//   const filteredTopics =
//     selectedLevel === 'ALL'
//       ? topics
//       : topics.filter((topic) => topic.level === selectedLevel);

//   return (
//     <div className="min-h-screen bg-gray-50 p-10">
//       <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
//         The Financial Literacy Odyssey
//       </h1>
//       <p className="text-center text-lg text-gray-700 mb-5">
//         Embark on an odyssey towards financial independence, a journey tailored
//         to guide you through the fundamentals and into the advanced realms of
//         financial knowledge.
//       </p>
//       <div className="text-center mb-5">
//         {/* Buttons to select the levels */}
//         <button
//           className={`px-4 py-2 rounded-full mx-2 ${
//             selectedLevel === 'ALL' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
//           }`}
//           onClick={() => setSelectedLevel('ALL')}
//         >
//           All
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full mx-2 ${
//             selectedLevel === 'ZERO' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
//           }`}
//           onClick={() => setSelectedLevel('ZERO')}
//         >
//           ZERO
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full mx-2 ${
//             selectedLevel === 'MEDIUM' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
//           }`}
//           onClick={() => setSelectedLevel('MEDIUM')}
//         >
//           MEDIUM
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full mx-2 ${
//             selectedLevel === 'ADVANCED' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
//           }`}
//           onClick={() => setSelectedLevel('ADVANCED')}
//         >
//           ADVANCED
//         </button>
//       </div>

//       {/* Display the filtered topics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredTopics.length > 0 ? (
//           filteredTopics.map((topic, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <h2 className="text-xl font-semibold mb-4">{topic.title}</h2>
//               <p className="text-gray-600 mb-4">{topic.description}</p>
//               <Link href={`/learning-modules/${topic.slug}`} className="text-purple-700 font-semibold">
//                 Find out more →
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-full">No topics available for this level.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LearningModules;


// components/ModulesList.jsx
"use client"
import { useEffect, useState } from 'react';
import { getAllModules } from '@/api/getAllModules';// Import your function directly

const ModulesList = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getAllModules();
        console.log(data); // Call the function directly
        setModules(data); // Store the data directly in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchModules();
  }, []);

  console.log(modules);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Modules List</h1>
      <ul>
        {modules?.map(module => (
          <li key={module.slug}>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;