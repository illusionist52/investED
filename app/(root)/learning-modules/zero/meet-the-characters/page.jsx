import Link from 'next/link';

const MeetTheCharacters = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Meet the Characters in Your Financial Story
      </h1>
      <p className="text-gray-700 mb-4">
        Understand key figures and roles in your personal financial journey, including yourself, financial advisors, and institutions.
      </p>
      <p className="text-gray-700">
        Detailed content about this financial concept will go here...
      </p>
      <div className="mt-6">
        <Link href="/learning-modules" className="text-purple-700 font-semibold">
          ← Back to Learning Modules
        </Link>
      </div>
    </div>
  );
};

export default MeetTheCharacters;
