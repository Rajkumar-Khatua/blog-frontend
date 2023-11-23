import React, { useState } from "react";
import {
  FaRegHeart,
  FaRegEye,
  FaShareAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const SingleBlogPost = () => {
  // You can use your own data or fetch it from an API
  const blog = {
    title: "How to create a single blog page UI using React and Tailwind CSS",
    author: "Bing",
    image: "https://i.imgur.com/8yZKZyF.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo consequat tincidunt. Cras id nisi quis augue luctus ullamcorper. Morbi quis lacus quis lorem sagittis aliquam. Fusce quis nisl sit amet nunc sagittis viverra. Curabitur vitae nisl quis leo tincidunt euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis lorem quis lorem sagittis tincidunt. Donec quis nisl quis lorem sagittis tincidunt. Sed quis nisl quis lorem sagittis tincidunt.",
    category: "Web Development",
    date: "23 Nov 2023",
    likes: 42,
    views: 123,
  };

  // You can use your own state management or a library
  const [likeCount, setLikeCount] = useState(blog.likes);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // You can use your own logic or a library
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
      if (disliked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikeCount(dislikeCount - 1);
      setDisliked(false);
    } else {
      setDislikeCount(dislikeCount + 1);
      setDisliked(true);
      if (liked) {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    }
  };

  // You can use your own styles or a UI library
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={blog.image}
            alt={blog.author}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="text-gray-700">
            <p className="font-bold">{blog.author}</p>
            <p className="text-sm">{blog.date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-700">
            <FaRegHeart className="mr-2" />
            <p>{blog.category}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaRegEye className="mr-2" />
            <p>{blog.views}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaShareAlt className="mr-2" />
            <p>Share</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mt-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg mt-4"
      />
      <p className="text-lg text-gray-700 mt-4">{blog.content}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <button
            className={`flex items-center ${
              liked ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={handleLike}
          >
            <FaThumbsUp className="mr-2" />
            <p>{likeCount}</p>
          </button>
          <button
            className={`flex items-center ${
              disliked ? "text-red-500" : "text-gray-700"
            }`}
            onClick={handleDislike}
          >
            <FaThumbsDown className="mr-2" />
            <p>{dislikeCount}</p>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            <AiFillFacebook className="mr-2" />
            <p>Facebook</p>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            <AiFillTwitterCircle className="mr-2" />
            <p>Twitter</p>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            <AiFillLinkedin className="mr-2" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
