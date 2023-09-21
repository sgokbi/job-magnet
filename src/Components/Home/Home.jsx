import React, { createContext, useState } from "react";
import Heading from "../Heading/Heading";
import pic from "../../assets/images/heading_pic.png";

import { useLoaderData } from "react-router-dom";
import JobsCategories from "../JobsCategories/JobsCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const data = useLoaderData();
  const jobCategories = data[0];
  const jobs = data[1];
  const [showMore, setShowMore] = useState(4);

  let showMoreBtn;
  if (jobs.length > showMore) {
    showMoreBtn = (
      <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 duration-300 text-white font-bold px-12 py-4 rounded-md text-2xl">
        Show More
      </button>
    );
  } else {
    showMoreBtn = "";
  }

  const handleShowAll = () => {
    setShowMore((prevValue) => prevValue + 4);
  };

  return (
    <div className="container mx-auto my-6 md:px-16  ">
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
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 duration-300 text-white font-bold p-3 rounded-md">
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
          {jobCategories.map((jobCategory, i) => (
            <JobsCategories key={i} jobCategory={jobCategory}></JobsCategories>
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
          {jobs.slice(0, showMore).map((job) => (
            <FeaturedJobs key={job.job_id} job={job}></FeaturedJobs>
          ))}
        </div>

        {/* ****** SHOW MORE JOBS ****** */}
        <div onClick={() => handleShowAll()} className="text-center my-10">
          {showMoreBtn}
        </div>

        {/* {jobs.length > showMore && (
          <div onClick={() => handleShowAll()} className="text-center my-10">
            Show more
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Home;
