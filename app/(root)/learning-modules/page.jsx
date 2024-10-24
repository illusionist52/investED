"use client"

import { getAllModules } from '@/api/getAllModules';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ModulesList = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getAllModules();
        console.log(data);
        setModules(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchModules();
  }, []);

  console.log(modules);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen p-10 bg-[#F3E8FF]">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        The Financial Literacy Odyssey
      </h1>
      <p className="text-center text-lg text-gray-700 mb-5">
        Embark on an odyssey towards financial independence, a journey tailored
        to guide you through the fundamentals and into the advanced realms of
        financial knowledge.
      </p>
      {/* <div className="text-center mb-5">
        <button
          className={`px-4 py-2 rounded-full mx-2 ${
            selectedLevel === 'ALL' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedLevel('ALL')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full mx-2 ${
            selectedLevel === 'ZERO' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedLevel('ZERO')}
        >
          ZERO
        </button>
        <button
          className={`px-4 py-2 rounded-full mx-2 ${
            selectedLevel === 'MEDIUM' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedLevel('MEDIUM')}
        >
          MEDIUM
        </button>
        <button
          className={`px-4 py-2 rounded-full mx-2 ${
            selectedLevel === 'ADVANCED' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedLevel('ADVANCED')}
        >
          ADVANCED
        </button>
      </div> */}

      {/* Display the filtered topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.length > 0 ? (
          modules.map((module) => (
            <div
              key={module.slug}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">{module.title}</h2>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <Link href={`/learning-modules/${module.slug}`} className="bg-purple-600 text-white/80 rounded-lg drop-shadow-md py-2 px-3 font-semibold">
                Start learning
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No topics available for this level.</p>
        )}
      </div>
    </div>
  );
};

export default ModulesList;