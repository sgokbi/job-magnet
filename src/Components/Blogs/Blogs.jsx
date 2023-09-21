import React from "react";
import Heading from "../Heading/Heading";
import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <Heading>
        <div className="text-center py-16 bg-slate-100">
          <h1 className="text-5xl font-normal leading-tight text-purple-600">
            Blogs
          </h1>
        </div>
      </Heading>

      <div className="container mx-auto my-16 md:px-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
