"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Login() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      {showSplash ? (
        <div className="flex flex-col items-center justify-center animate-fadeIn">
          <h1 className="text-6xl font-bold text-gray-800 tracking-wider">
            LITLYX
          </h1>
           <p className="mt-4 text-xl text-gray-600">Litlyx, Analytics, AI, Dashboard, Data, Analysis</p>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Litlyx</h1>
            <p className="text-gray-500">Welcome back! Please login.</p>
          </div>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md mt-4"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-gray-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="mt-6 text-center text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-gray-800 font-semibold hover:underline">
              Sign up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
