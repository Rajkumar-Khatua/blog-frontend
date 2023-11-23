import React from "react";
import { Link } from "react-router-dom";
import FeaturedArticle from "../components/FeaturedArticle";
import TrendingArticles from "../components/TrendingArticles";
import RecentPosts from "../components/RecentPost";

const Home = () => {
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

  const recentPosts = [
    {
      title: "Recent Post 1",
      author: "John Doe",
      imageUrl:
        "https://images.pexels.com/photos/42400/pexels-photo-42400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "recent-post-1",
    },
    {
      title: "Recent Post 2",
      author: "Jane Doe",
      imageUrl:
        "https://images.pexels.com/photos/370037/pexels-photo-370037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "recent-post-2",
    },
    // Add more recent posts as needed
  ];

  const trendingArticles = [
    {
      title: "Trending Article 1",
      author: "John Doe",
      imageUrl:
        "https://images.pexels.com/photos/370037/pexels-photo-370037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "trending-article-1",
    },
    {
      title: "Trending Article 2",
      author: "Jane Doe",
      imageUrl:
        "https://images.pexels.com/photos/42400/pexels-photo-42400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "trending-article-2",
    },
    // Add more trending articles as needed
  ];

  const categories = [
    {
      name: "Travel",
      imageUrl:
        "url('https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    },
    {
      name: "Technology",
      imageUrl:
        "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    },
    {
      name: "Food",
      imageUrl:
        "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    },
    {
      name: "Travel",
      imageUrl:
        "url('https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1090408/pexels-photo-1090408.jpeg?auto=compress&cs=tinysrgb&w=1600')`, // Replace with your image URL
        }}
      >
        <div className="text-white backdrop-blur-sm bg-opacity-75 p-5 rounded-md">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover interesting articles and stay updated with the latest news.
          </p>
          <Link
            to="/blogs"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent text-lg"
          >
            Explore Blog
          </Link>
        </div>
      </section>

      {/* Categories Navigation */}
      <div className="mx-auto my-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Categories
        </h2>
        <div className="flex space-x-4 overflow-x-auto whitespace-nowrap rounded-box">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name}`}
              className="text-primary hover:underline relative"
              style={{
                backgroundImage: category.imageUrl,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50px",
                width: "150px",
              }}
            >
              <span className="absolute inset-0 bg-black opacity-30"></span>
              <span className="relative z-10 text-white text-center font-semibold">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Articles Section */}
      <section className="container mx-auto my-8">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured Articles
          </h2>
          <Link
            to="/featured"
            className="text-xl hover:border hover:transition-all hover:text-blue"
          >
            Show All{" "}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the featured articles and render FeaturedArticle component */}
          {featuredArticles.map((article, index) => (
            <FeaturedArticle key={index} {...article} />
          ))}
        </div>
      </section>

      {/* Training articles */}
      <section className="container mx-auto my-8 ">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Trending Articles
          </h2>
          <Link
            to="/treading"
            className="text-xl hover:border hover:transition-all hover:text-blue"
          >
            Show All{" "}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the trending articles and render FeaturedArticle component */}
          {trendingArticles.map((article, index) => (
            <TrendingArticles key={index} {...article} />
          ))}
        </div>
      </section>
      {/* Recent Posts section */}

      <section className="container mx-auto my-8">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Recent Posts
          </h2>
          <Link
            to="/recent"
            className="text-xl hover:border hover:transition-all hover:text-blue"
          >
            Show All{" "}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the recent posts and render FeaturedArticle component */}
          {recentPosts.map((post, index) => (
            <RecentPosts key={index} {...post} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          Subscribe to our newsletter for the latest updates and exclusive
          content.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white border rounded-md p-2 mb-4 sm:mb-0 sm:mr-2 focus:outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent text-lg">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
