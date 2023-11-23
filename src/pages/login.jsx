import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen ">
      <div className="m-auto p-6 sm:p-10 bg-mytheme-neutral rounded-md shadow-md w-full sm:w-96 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border rounded-md pr-10"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <button
              onClick={handlePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 12a10 10 0 1120 0 10 10 0 01-20 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            className="h-4 w-4 text-mytheme-primary border-gray-300 rounded focus:ring-mytheme-primary focus:border-mytheme-primary"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <Link to="/forget-password" className="text-sm text-orange-400">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-mytheme-primary text-white px-4 py-2 rounded-md hover:bg-mytheme-accent w-full font-bold bg-orange-400">
            Login
          </button>
        </div>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?
            <Link
              to="/register"
              className="text-mytheme-secondary text-orange-400"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
