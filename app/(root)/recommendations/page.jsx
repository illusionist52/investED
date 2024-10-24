"use client";
import { Test } from '@/api/llama/test';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [recommendations, setRecommendations] = useState(' ');
  const [displayText, setDisplayText] = useState(''); // State for the typing animation

  useEffect(() => {
    if (recommendations) {
      let index = 0;
      setDisplayText(''); // Clear displayText for new typing animation
      const typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + recommendations[index]);
        index++;
        if (index === recommendations.length) {
          clearInterval(typingInterval); // Stop typing when done
        }
      }, 20); // Adjust the speed of typing (lower is faster)
      return () => clearInterval(typingInterval); // Cleanup on component unmount
    }
  }, [recommendations]); // Only run this effect when recommendations change

  const onSubmit = async (data) => {
    console.log(data);
    const recom = await Test(data);
    console.log(recom);
    setRecommendations("  "+ recom); // Assuming 'recom' is a markdown string
  };

  return (
    <div className='h-[100%] flex gap-10 items-center'>
      {/* Form Section */}
      <div className='bg-white w-[30%] h-[80%] my-16 rounded-3xl p-4 shadow-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4">
            <h1 className='text-3xl font-bold'>Your portfolio details</h1>
            <div>
              <Label htmlFor="period">Period of Investment</Label>
              <Input
                id="period"
                type="number"
                {...register('period', { required: true })}
              />
              {errors.period && <p className="text-red-500">This field is required</p>}
            </div>
            <div>
              <Label htmlFor="capital">Capital</Label>
              <Input
                id="capital"
                type="number"
                {...register('capital', { required: true })}
              />
              {errors.capital && <p className="text-red-500">This field is required</p>}
            </div>
            <div>
              <Label htmlFor="goal_amount">Goal Amount</Label>
              <Input
                id="goal_amount"
                type="number"
                {...register('goal_amount', { required: true })}
              />
              {errors.goal_amount && <p className="text-red-500">This field is required</p>}
            </div>
            <div>
              <Label htmlFor="risk_tolerance">Risk Tolerance</Label>
              <select
                id="risk_tolerance"
                {...register('risk_tolerance', { required: true })}
                className="border p-2 w-full"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.risk_tolerance && <p className="text-red-500">This field is required</p>}
            </div>
          </div>
          <Button type="submit" className="bg-purple-500 text-white hover:bg-purple-400 rounded-lg px-2 py-2">
            Get Recommendations
          </Button>
        </form>
      </div>

      {/* Recommendations Section */}
      <div className='h-[80%] bg-white w-[60%] overflow-y-auto rounded-3xl p-6 my-6 hide-scrollbar shadow-lg'>
        <h2 className="text-2xl font-bold mb-4">Your Recommendations</h2>
        {displayText ? (
          <ReactMarkdown className="prose max-w-none">
            {typeof displayText === 'string' ? displayText : 'No recommendations to display.'}
          </ReactMarkdown>
        ) : (
          <p className='text-lg text-gray-500'>Please fill in the form to get your investment recommendations.</p>
        )}
      </div>
    </div>
  );
}

export default Page;
