import React from "react";
import pic from "../../assets/images/agriculture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ jobs }) => {
  // console.log(jobs);

  const {
    job_id,
    company: { logo, name },
    job_title,
    location,
    salary_range,
    job_type,
  } = jobs;

  return (
    <div className="border-solid border-2 border-gray-100 rounded-md hover:shadow-lg duration-300 p-8 ">
      <img className="mb-4" src={pic} alt="" />
      <p className="font-semibold text-slate-700 text-xl mb-2">{job_title} </p>
      <p className="text-lg mb-4">{name} </p>

      <p className="my-5">
        <span className="border-solid border-2 border-purple-600 rounded p-2 text-purple-600">
          {job_type[0]}
        </span>
        <span className="border-solid border-2 border-purple-600 rounded  p-2 ms-4 text-purple-600">
          {job_type[1]}
        </span>
      </p>
      <p className="mb-4">
        <span className="text-slate-700 ">
          <FontAwesomeIcon
            className="text-purple-600 me-2"
            icon={faLocationDot}
          ></FontAwesomeIcon>{" "}
          {location}
        </span>
        <span className="ms-10 text-slate-700 ">
          <span className="font-medium underline me-2">Salary:</span>{" "}
          {salary_range}
        </span>
      </p>
      <Link to="/jobDetails">
        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold p-3 rounded-md">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
