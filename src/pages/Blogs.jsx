import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const BlogsPage = () => {
  // Mock data, replace it with your actual data
  const articles = [
    {
      id: 1,
      title: "Article 1",
      author: "John Doe",
      imageUrl: "https://placekitten.com/300/200",
      likes: 15,
      comments: 5,
    },
    {
      id: 2,
      title: "Article 2",
      author: "Jane Doe",
      imageUrl: "https://placekitten.com/300/200",
      likes: 10,
      comments: 3,
    },
    // Add more articles as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        All Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              {article.title}
            </h3>
            <div className="mb-4">
              <img
                src={article.imageUrl}
                alt={`${article.title} cover`}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-600">{article.author}</span>
            </div>
            <div className="">
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    voluptatum, voluptatem, quibusdam, accusantium quas
                    voluptates voluptate quos molestiae quidem doloribus
                    consequatur. Quisquam, voluptates. Quisquam, voluptates.
                </p>
            </div>
            <div className="mb-4">
              <Link
                to={`/blog/${article.id}`}
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-600">Likes: {article.likes}</span>
              <span className="text-gray-600">
                Comments: {article.comments}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebook className="text-blue-500 cursor-pointer" />
              <FaTwitter className="text-blue-500 cursor-pointer" />
              <FaLinkedin className="text-blue-500 cursor-pointer" />
              <FaInstagram className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
