/*import React from "react";
import { Link } from "react-router-dom";
import ActiveLinks from "../ActiveLinks/ActiveLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="grid grid-cols-3 py-4 shadow-sm sticky top-0 z-50  px-24 bg-slate-50 items-center">
      <Link to="/">
        <h1 className="text-3xl font-bold text-purple-600">JobMagnet</h1>
      </Link>
      <div className="flex justify-around">
        <ActiveLinks to="/">Home</ActiveLinks>
        <ActiveLinks to="/statistics">Statistics</ActiveLinks>
        <ActiveLinks to="/appliedJobs">Applied Jobs</ActiveLinks>
        <ActiveLinks to="/blogs">Blog</ActiveLinks>
      </div>
      <p className="text-end text-2xl text-purple-600">
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      </p>
    </nav>
  );
};

export default Header; 
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBarsStaggered,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ActiveLinks from "../ActiveLinks/ActiveLinks";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-24  bg-slate-50 shadow-sm  sticky top-0  z-50">
      <div className=" md:flex justify-between items-center container mx-auto">
        <Link to="/">
          <h1 className="text-3xl font-bold text-purple-600">JobMagnet</h1>
        </Link>

        <ul
          className={`md:flex absolute md:static duration-300 text-xl ${
            open ? "right-0" : "-right-80"
          } ${open ? "p-4" : "p-0"} ${open ? "mt-4" : "mt-0"} ${
            open ? "opacity-100 " : " opacity-100"
          } ${open ? "bg-slate-50" : "bg-slate-0"} ${
            open ? "text-center" : "text-0"
          } ${open ? "w-full" : "w-auto"}`}
        >
          <li
            className={`px-4  hover:text-purple-600 duration-300 ${
              open ? "my-3" : "my-0"
            }`}
          >
            <ActiveLinks to="/">Home</ActiveLinks>
          </li>
          <li
            className={`px-4  hover:text-purple-600 duration-300 ${
              open ? "my-3" : "my-0"
            }`}
          >
            <ActiveLinks to="/statistics">Statistics</ActiveLinks>
          </li>
          <li
            className={`px-4  hover:text-purple-600 duration-300 ${
              open ? "my-3" : "my-0"
            }`}
          >
            <ActiveLinks to="/appliedJobs">Applied Jobs</ActiveLinks>
          </li>
          <li
            className={`px-4  hover:text-purple-600 duration-300 ${
              open ? "my-3" : "my-0"
            }`}
          >
            <ActiveLinks to="/blogs">Blog</ActiveLinks>
          </li>
          <p
            className={`px-4 text-purple-600 cursor-pointer hover:scale-110 duration-300 ${
              open ? "my-3" : "my-0"
            }`}
          >
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </p>
        </ul>
      </div>
      <div onClick={() => setOpen(!open)} className="md:hidden ">
        <span className="cursor-pointer">
          {open === true ? (
            <FontAwesomeIcon
              className="text-3xl text-purple-600"
              icon={faXmark}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="text-2xl text-purple-600"
              icon={faBarsStaggered}
            ></FontAwesomeIcon>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
