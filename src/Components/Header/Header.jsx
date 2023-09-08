import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <h1>JobMagnet</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/appliedJobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <button>Profile</button>
    </div>
  );
};

export default Header;
