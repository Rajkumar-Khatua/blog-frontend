import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isPasswordMatched = password === confirmPassword;

  return (
    <div className="flex h-screen">
      <div className="m-auto p-6 sm:p-10 bg-mytheme-neutral rounded-md shadow-md w-full sm:w-96 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

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
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="email"
            id="email"
            placeholder="Enter your email"
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
              value={password}
              onChange={handlePasswordChange}
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className={`w-full p-2 border rounded-md pr-10 ${
              isPasswordMatched ? "" : "border-red-500"
            }`}
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!isPasswordMatched && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
          )}
        </div>

        <div className="text-center">
          <button className="bg-mytheme-primary text-white px-4 py-2 rounded-md hover:bg-mytheme-accent w-full font-bold bg-orange-400">
            Register
          </button>
        </div>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-mytheme-secondary text-orange-400"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
