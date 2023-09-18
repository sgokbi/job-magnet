import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const [jobStatistics, setJobStatistics] = useState([]);

  useEffect(() => {
    fetch("jobStatistic.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobStatistics(data);
      });
  }, []);

  return (
    <div>
      <Heading>
        <div className="text-center py-16 bg-slate-100">
          <h1 className="text-5xl font-normal leading-tight text-purple-600">
            Statistics
          </h1>
        </div>
      </Heading>

      <div className="container mx-auto my-6 md:px-16">
        <div className="text-center my-12">
          <h1 className="text-3xl font-semibold mb-3 text-slate-700">
            Job Market Statistics
          </h1>

          <p className="text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            quia dolores voluptatibus est quam commodi nulla nobis cupiditate
            facere rerum? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quia qui laudantium itaque earum. Rem perferendis blanditiis
            odit, eveniet nulla quasi! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi quas asperiores temporibus voluptates
            repellat praesentium eaque, perspiciatis necessitatibus nobis
            ratione.
          </p>
        </div>

        <div className=" text-center my-24">
          <div className="flex justify-center items-center">
            <ResponsiveContainer width="60%" height={300}>
              <BarChart width={800} height={300} data={jobStatistics}>
                <Bar dataKey="average_job_openings" fill="#82ca9d"></Bar>
                <YAxis></YAxis>
                <XAxis dataKey="year"></XAxis>
                <Tooltip></Tooltip>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h1 className="mt-2 text-lg font-semibold text-gray-600">
            1: This bar chart below is about the average job openings in every
            year.
          </h1>
        </div>

        <div className=" text-center my-16">
          <div className="flex justify-center items-center">
            <ResponsiveContainer width="60%" height={300}>
              <BarChart width={800} height={300} data={jobStatistics}>
                <Bar dataKey="average_job_seekers" fill="#8884d8"></Bar>
                <YAxis></YAxis>
                <XAxis dataKey="year"></XAxis>
                <Tooltip></Tooltip>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h1 className="mt-2 text-lg font-semibold text-gray-600">
            2: This bar chart below is about the average job seekers in every
            year.
          </h1>
        </div>

        <div className=" text-center my-16 ">
          <div className="flex justify-center items-center ">
            <ResponsiveContainer width="60%" height={300}>
              <BarChart data={jobStatistics}>
                <Bar dataKey="average_hiring_index" fill="#82ca9d"></Bar>
                <YAxis></YAxis>
                <XAxis dataKey="year"></XAxis>
                <Tooltip></Tooltip>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h1 className="mt-2 text-lg font-semibold text-gray-600">
            2: This bar chart below is about the average hiring index in every
            year.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
