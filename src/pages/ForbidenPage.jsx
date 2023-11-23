// ForbiddenPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ForbiddenPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Forbidden. You don't have permission to access this resource.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;
