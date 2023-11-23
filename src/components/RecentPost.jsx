import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = ({ title, author, imageUrl, slug }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        {title}
      </h3>
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={`${title} cover`}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-600">{author}</span>
      </div>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link to={`/blog/${slug}`} className="text-primary hover:underline">
        Read More
      </Link>
    </div>
  );
};

export default RecentPosts;
