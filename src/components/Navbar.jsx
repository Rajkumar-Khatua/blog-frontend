import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Daily Update
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">Settings</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
