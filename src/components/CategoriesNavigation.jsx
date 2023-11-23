import React from "react";
import { Link } from "react-router-dom";

const CategoriesNavigation = ({ categories }) => {
  const categoryBackgrounds = {
    // Add your category names and corresponding image URLs
    category1:
      "url('https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    category2:
      "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    category3:
      "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    // Add more as needed
  };

  return (
    <section className="container mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
        Explore Categories
      </h2>
      <div className="flex flex-wrap -mx-2">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name}`}
            className="relative px-4 py-2 m-2 text-lg font-medium text-blue-600 bg-blue-100 border border-blue-300 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-500"
            style={{
              backgroundImage: categoryBackgrounds[category.name],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="absolute inset-0 bg-black opacity-30 rounded-full"></span>
            <span className="relative z-10">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesNavigation;
