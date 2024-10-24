'use client'

import { signUpUser } from "@/api/signup";
import { verifyOTP } from "@/api/verifyOTP";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const onSubmit = useCallback(
    async (data) => {
      const userData = {
        user_name: data.username,
        full_name: data.fullname,
        parent_email: data.email,
        virtual_currency: 0,
        modules_completed: 0, 
        rank: "Beginner",
        streaks: 0,
        goal: "Set your goal!",
        badges_list: "[]",

        // PARENTS DATA
        parent_name: "",
        password:""
      };

      try {
        const response = await signUpUser(userData);
        console.log("User signed up:", response);
        
        // Show OTP input after successful signup
        setIsOtpVisible(true);
        reset();
      } catch (error) {
        console.error("Error during signup:", error);
      }
    },
    [reset]
  );

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyOTP(otp); // Call the verify OTP function
      if (response.success) {
        window.location.href = "/expense-tracker";
      } else {
        setOtpError(response.message); // Set error message if OTP verification fails
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setOtpError("Failed to verify OTP."); // Generic error message
    }
  };

  return (
    <div className="flex h-screen">
      {/* <!-- Left Pane --> */}
      <div className="hidden flex-1 items-center justify-center bg-white text-black lg:flex">
        <div className="max-w-md text-center">
          <Image
            src="/images/auth.svg"
            width={100}
            height={100}
            className="w-full h-full"
            alt="Authentication Illustration"
          />
        </div>
      </div>
      {/* <!-- Right Pane --> */}
      <div className="flex w-full items-center justify-center bg-gradient-to-l from-purple-300 to-purple-100 lg:w-1/2">
        <div className="w-full max-w-md p-6">
          {isOtpVisible ? (
            // OTP Verification Section
            <>
              <h1 className="mb-2 text-center text-3xl font-semibold text-black">
                Verify your OTP
              </h1>
              <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
                One-step away from getting financial knowledge
              </h1>
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                    required
                  />
                  {otpError && <p className="text-red-500">{otpError}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${isSubmitting ? 'opacity-50' : ''}`}
                    disabled={isSubmitting}
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </>
          ) : (
            // Sign Up Form
            <>
              <h1 className="mb-6 text-center text-3xl font-semibold text-black">
                Sign Up
              </h1>
              <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
                Join Our Community with all-time access and free
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    {...register("username", { required: true })}
                    className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  />
                </div>
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    {...register("fullname", { required: true })}
                    className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Parent Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${isSubmitting ? 'opacity-50' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-black hover:underline">
                    <span className="font-bold">Login here</span>
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
