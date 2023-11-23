import React from "react";
import TrendingArticles from "../components/TrendingArticles";

const TrendingArticlesPage = () => {
  const featuredArticles = [
    {
      title: "Article 1",
      author: "John Doe",
      imageUrl:
        "https://images.pexels.com/photos/42400/pexels-photo-42400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      slug: "article-1",
    },
    {
      title: "Article 2",
      author: "Jane Doe",
      imageUrl:
        "https://images.pexels.com/photos/370037/pexels-photo-370037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      slug: "article-2",
    },
    {
      title: "Article 3",
      author: "Jane Doe",
      imageUrl:
        "https://images.pexels.com/photos/370037/pexels-photo-370037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      slug: "article-2",
    },
    // Add more articles as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Trending Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArticles.map((article, index) => (
          <TrendingArticles key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArticlesPage;
