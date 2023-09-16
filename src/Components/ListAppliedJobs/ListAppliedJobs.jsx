import React from "react";

const ListAppliedJons = ({ job }) => {
  const { job_title, company } = job;
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-md w-2/5 mb-4 p-4">
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
      </div>
    </div>
  );
};

export default ListAppliedJons;
