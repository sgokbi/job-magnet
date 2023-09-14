import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import { useLoaderData } from "react-router-dom";
import { jobsLoaders, loaders } from "../Loaders/Loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEnvelope,
  faFile,
  faFileArchive,
  faLocationPin,
  faMessage,
  faPhone,
  faPhoneAlt,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const [jobs, setJobs] = useState();
  const jobId = useLoaderData();

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  console.log(jobs);

  const exists = jobs?.find((d) => d.job_id === jobId);
  const responsibility = exists?.job_responsibility.join(" ");

  return (
    <div>
      <Heading>
        <div className="text-center py-16 bg-slate-50">
          <h1 className="text-5xl font-normal leading-tight text-purple-600">
            Job Details
          </h1>
        </div>
      </Heading>

      {/* DETAILS OF JOB  */}
      <div className="container mx-auto md:px-16 md:flex my-12 ">
        <div className="md:w-2/3  p-3 pe-8">
          <h1 className="font-medium text-2xl text-slate-700">
            {exists?.job_title}
          </h1>
          <h1 className="font-normal text-xl mt-1 text-slate-700">
            {exists?.company.name}
          </h1>
          <hr className="my-3" />
          <p className="my-2 text-slate-600">
            <span className="font-semibold text-slate-700">
              Job Description:
            </span>
            {exists?.job_description}
          </p>
          <p className="my-2 text-slate-600">
            <span className="font-semibold text-slate-700">
              Job Description:{" "}
            </span>
            {responsibility}
          </p>

          <h1 className="font-semibold text-slate-700">
            Educational Requirements:{" "}
          </h1>
          <p className="mb-2 text-slate-600">
            {exists?.educational_requirements}
          </p>

          <h1 className="font-semibold text-slate-700"> Experience: </h1>
          <p className="mb-2 text-slate-600">{exists?.experience}</p>
        </div>

        {/* JOB DETAILS  */}

        <div className="md:w-1/3  p-3 bg-purple-50 rounded-md">
          <h1 className="font-semibold text-slate-700 text-xl">Job Details</h1>

          <hr className="my-4" />

          <div>
            <p className="my-2 text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-700"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              <span className="font-semibold text-slate-700">Salary: </span>
              {exists?.salary_range}{" "}
            </p>
            <p className="my-2 text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-700"
                icon={faFileArchive}
              ></FontAwesomeIcon>
              <span className="font-semibold text-slate-700">Job Title: </span>
              {exists?.job_title}
            </p>
          </div>

          <h1 className="font-semibold text-slate-700 text-xl mt-6">
            Contact Information
          </h1>

          <hr className="my-4" />

          <div>
            <p className="my-2 text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-700"
                icon={faPhone}
              ></FontAwesomeIcon>
              <span className="font-semibold text-slate-700">Phone: </span>{" "}
              {exists?.contact_information.contact_phone}
            </p>

            <p className="my-2 text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-700"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <span className="font-semibold text-slate-700">Email: </span>{" "}
              {exists?.contact_information.contact_email}
            </p>

            <p className="my-2 text-slate-600">
              <FontAwesomeIcon
                className="me-2 text-purple-700"
                icon={faLocationPin}
              ></FontAwesomeIcon>
              <span className="font-semibold text-slate-700">Address: </span>{" "}
              {exists?.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-12 flex items-center justify-center  ">
        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-xl p-3 rounded-md md:w-72 w-36">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
