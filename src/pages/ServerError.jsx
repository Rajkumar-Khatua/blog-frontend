import React from 'react';
import { Link } from 'react-router-dom';

const ServerErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">500</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Oops! Something went wrong on our end.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ServerErrorPage;
