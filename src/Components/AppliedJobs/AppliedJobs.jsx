import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import { getJobsDataFromLocalStorage } from "../dataStore/dataStore";
import ListAppliedJobs from "../ListAppliedJobs/ListAppliedJobs";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState();
  const [jobsCart, setJobsCart] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    const storedJobs = getJobsDataFromLocalStorage();
    const savedJobs = [];

    // 1. get id of the applied jobs
    for (const id in storedJobs) {
      // 2.get job from jobs state by using id
      const appliedJob = jobs?.find((job) => job.job_id === id);

      if (appliedJob) {
        savedJobs.push(appliedJob);
      }
    }
    // set the cart
    setJobsCart(savedJobs);
  }, [jobs]);

  return (
    <div>
      <Heading>
        <div className="text-center py-16 bg-slate-100">
          <h1 className="text-5xl font-normal leading-tight text-purple-600">
            Applied Jobs
          </h1>
        </div>
      </Heading>

      <div className="container mx-auto m-12 ">
        {jobsCart.map((job) => (
          <ListAppliedJobs key={job.job_id} job={job}></ListAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
