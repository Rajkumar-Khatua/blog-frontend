import React from "react";
import { Link } from "react-router-dom";

const TrendingArticles = ({ title, author, imageUrl, slug }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderRadius: "5px",
    height: "300px",
  };


  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md" style={containerStyle}>
      <div style={contentStyle}>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
          {title}
        </h3>
        <div className="flex items-center mb-4">
          <span className="text-white">{author}</span>
        </div>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <Link
          to={`/blog/${slug}`}
          className="text-primary hover:underline border p-3 rounded-full hover:bg-zinc-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TrendingArticles;
