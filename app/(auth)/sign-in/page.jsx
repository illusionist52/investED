"use client"

import { loginUser } from "@/api/login";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    try{
      e.preventDefault();
      const result = await loginUser(userName, parentEmail);
      setMessage(result.message);
      console.log(result);
      localStorage.setItem("userID", result.userData.user_id);
      router.push('/expense-tracker');
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Pane */}
      <div className="flex w-full items-center justify-center bg-gradient-to-r from-purple-300 to-purple-100 lg:w-1/2">
        <div className="w-full max-w-md p-6">
          <h1 className="mb-6 text-center text-3xl font-semibold text-black">Sign In</h1>
          <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
            Join our Community with all-time access and free
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
          {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-black hover:underline">
                <span className="font-bold">Register here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Pane */}
      <div className="hidden flex-1 items-center justify-center bg-white text-black lg:flex">
        <div className="max-w-md text-center">
          <Image
            src="/images/auth.svg"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
