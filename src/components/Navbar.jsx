import React from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
  const links = (
    <>
      <li >
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTreatments">All Treatments</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/appointments">My Appointments</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold">teethWizard</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold  gap-10 menu-horizontal px-1 bg-white text-gray-500">{links}</ul>
      </div>

      <div className="login flex gap-2 items-center navbar-end">
        <div className=" ">
          {/* {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )} */}
        </div>
        {/* {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )} */}
         <img src={userIcon} alt="" />

        <Link to="/auth/login" className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
