import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
