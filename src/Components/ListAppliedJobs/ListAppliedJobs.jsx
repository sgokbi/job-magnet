import React from "react";
import { useNavigate } from "react-router-dom";

const ListAppliedJons = ({ job }) => {
  const { job_title, company, job_id: id } = job;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log("clicked");
    navigate(`/${id}`);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-md md:w-2/5 w-full mb-4 p-4">
        <h1 className="text-slate-600 text-lg">
          <span className="font-semibold me-2 text-xl text-slate-700">
            Company Name:
          </span>
          {company.name}
        </h1>
        <h1 className="text-purple-600 text-lg mt-2 ">
          <span className="font-semibold me-2 text-xl text-slate-700">
            Position:
          </span>
          {job_title}
        </h1>

        <button
          onClick={handleViewDetails}
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110 duration-300 text-white font-bold p-2 mt-2 rounded-md text-sm "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListAppliedJons;
