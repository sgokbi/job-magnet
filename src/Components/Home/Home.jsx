import React from "react";
import Heading from "../Heading/Heading";
import pic from "../../assets/images/heading_pic.png";
import tech from "../../assets/images/technology.png";

import { useLoaderData } from "react-router-dom";
import JobsCategories from "../JobsCategories/JobsCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto my-6 px-16  ">
      {/* ******* HEADING ****** */}
      <Heading>
        <div
          className=" 
  md:flex justify-between "
        >
          <div className="order-first md:order-last">
            <img src={pic} alt="" />
          </div>
          <div className="flex justify-start items-center md:w-4/6 w-full mt-16 md:mt-0 ">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-medium text-slate-600 leading-tight">
                One Step <br />
                Closer To Your <br />
                <span className="text-purple-600">Dream Job</span>
              </h1>

              <p className="my-6 md:w-9/12 w-full leading-7 text-slate-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque qui libero! Non ipsam quidem culpa, amet quae adipisci
                necessitatibus repellat doloremque quisquam laborum tempora.
                Quasi consequatur harum nihil?
              </p>
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold p-3 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Heading>

      {/* ****** JOBS CATEGORIES ****** */}
      <div className="my-24 ">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-medium text-slate-600 my-4">
            Job Category List
          </h1>
          <p className="leading-7 text-slate-500 ">
            Explore thousands of job opportunities all the information you nead.
            Its your future.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data[0].map((jobCategories, i) => (
            <JobsCategories
              key={i}
              jobCategories={jobCategories}
            ></JobsCategories>
          ))}
        </div>
      </div>

      {/* ****** FEATURED JOBS ****** */}
      <div className="my-24 ">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-medium text-slate-600 my-4">
            Featured Jobs
          </h1>
          <p className="leading-7 text-slate-500 ">
            Explore thousands of job opportunities all the information you nead.
            Its your future.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {data[1].map((jobs) => (
            <FeaturedJobs key={jobs.job_id} jobs={jobs}></FeaturedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
