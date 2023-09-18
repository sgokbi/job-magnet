import React from "react";
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
