// UnauthorizedPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">401</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Unauthorized access. Please log in.
        </p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Go back to Login
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
