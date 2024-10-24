import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      {/* <!-- Left Pane --> */}
      <div className="flex w-full items-center justify-center bg-gray-100 lg:w-1/2">
        <div className="w-full max-w-md p-6">
          <h1 className="mb-6 text-center text-3xl font-semibold text-black">
            Sign In
          </h1>
          <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
            Join to Our Community with all time access and free{" "}
          </h1>
          <form action="#" method="POST" className="space-y-4">
            {/* <!-- Your form elements go here --> */}
            <div>
              <label
                for="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              />
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              />
            </div>
            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <Link href="/sign-up" className="text-black hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Right Pane --> */}
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
