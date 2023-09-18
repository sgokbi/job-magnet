import {
  faClock,
  faTimeline,
  faUser,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  console.log(blog);

  const { id, image, blog_link: link, title, author_name: author, date } = blog;

  return (
    <Link to={link}>
      <div className="border p-3 rounded-md cursor-pointer hover:shadow-2xl hover:border-0 duration-300">
        <img className="w-full" src={image} alt="" />
        <div className=" mt-8">
          <h1 className="text-center text-xl text-slate-700 font-semibold">
            {title}
          </h1>
          <div className="flex justify-evenly mt-5">
            <p className="text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-800"
                icon={faUser}
              ></FontAwesomeIcon>
              {author}
            </p>
            <p className="text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-800"
                icon={faClock}
              ></FontAwesomeIcon>
              {date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
