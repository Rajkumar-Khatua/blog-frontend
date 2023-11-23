import React, { useState } from "react";

const ProfilePage = () => {
  // You can use your own data or fetch it from an API
  const user = {
    username: "bing",
    name: "Bing",
    email: "bing@bing.com",
    image: "https://i.imgur.com/8yZKZyF.jpg",
    bio: "I am a chat mode of Microsoft Bing. I can chat with you and create imaginative and innovative content for you.",
    password: "********",
    posts: 10,
    comments: 25,
    likes: 42,
  };

  // You can use your own state management or a library
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const [bio, setBio] = useState(user.bio);
  const [password, setPassword] = useState(user.password);
  const [editMode, setEditMode] = useState(false);
  // You can use your own state management or a library
  const [showDelete, setShowDelete] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);

  // You can use your own logic or a library
  const handleDelete = () => {
    setShowDelete(true);
    // You can also add your own logic to delete the account
  };

  const handleDeactivate = () => {
    setShowDeactivate(true);
    // You can also add your own logic to deactivate the account
  };

  const handleCancelDelete = () => {
    setShowDelete(false);
    setShowDeactivate(false);
  };
  // You can use your own logic or a library
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // You can also update the user data in the database or API
  };

  const handleCancel = () => {
    setEditMode(false);
    setUsername(user.username);
    setName(user.name);
    setEmail(user.email);
    setImage(user.image);
    setBio(user.bio);
    setPassword(user.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "image":
        setImage(value);
        break;
      case "bio":
        setBio(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // You can use your own styles or a UI library
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Profile</h1>
        {editMode ? (
          <div className="flex items-center space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-start mt-4">
        <div className="w-full sm:w-1/4 mr-4">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
          {editMode && (
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded p-2"
              placeholder="Enter image URL"
            />
          )}
        </div>
        <div className="w-full sm:w-3/4">
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-2xl font-bold text-gray-900 mr-4">{username}</p>
            {editMode && (
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                placeholder="Enter username"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center mt-4">
            <p className="text-xl font-bold text-gray-900 mr-4">{name}</p>
            {editMode && (
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                placeholder="Enter name"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center mt-4">
            <p className="text-xl text-gray-700 mr-4">{email}</p>
            {editMode && (
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                placeholder="Enter email"
              />
            )}
          </div>
          <div className="mt-4">
            <p className="text-lg text-gray-700">{bio}</p>
            {editMode && (
              <textarea
                name="bio"
                value={bio}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded p-2"
                placeholder="Enter bio"
                rows="4"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center mt-4">
            <p className="text-xl text-gray-700 mr-4">{password}</p>
            {editMode && (
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                placeholder="Enter password"
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center mt-4">
            <p className="text-xl text-gray-700 mr-4">Posts: {user.posts}</p>
            <p className="text-xl text-gray-700 mr-4">
              Comments: {user.comments}
            </p>
            <p className="text-xl text-gray-700 mr-4">Likes: {user.likes}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Danger Zone</h1>
        <p className="text-lg text-gray-700 mt-4">
          Be careful, these actions are irreversible.
        </p>
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <p className="text-xl text-red-500 mr-4">Delete account</p>
            <p className="text-gray-700">
              This will permanently delete your account and all your data.
            </p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <p className="text-xl text-yellow-500 mr-4">Deactivate account</p>
            <p className="text-gray-700">
              This will temporarily disable your account and hide your profile.
            </p>
          </div>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={handleDeactivate}
          >
            Deactivate
          </button>
        </div>
        {showDelete && (
          <div className="bg-red-100 border border-red-300 p-4 rounded mt-4">
            <p className="text-red-700">
              Are you sure you want to delete your account?
            </p>
            <div className="flex items-center justify-end mt-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                Confirm
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {showDeactivate && (
          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded mt-4">
            <p className="text-yellow-700">
              Are you sure you want to deactivate your account?
            </p>
            <div className="flex items-center justify-end mt-2">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                Confirm
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
