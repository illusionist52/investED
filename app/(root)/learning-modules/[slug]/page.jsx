"use client";

import { getModuleBySlug } from "@/api/getModuleBySlug";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

const Page = ({ params }) => {
  const { slug } = params;
  const [modContent, setModContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleModule = async () => {
      try {
        const data = await getModuleBySlug(slug);
        setModContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleModule();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!modContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">No module content found.</div>
      </div>
    );
  }

  const { title, level, content } = modContent;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <article className="mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-center text-purple-700 mb-4">{title}</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-500 mb-6">Level: {level}</h2>
        <div className="text-gray-600 mb-4">
          <ReactMarkdown className="text-lg">{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Page;
