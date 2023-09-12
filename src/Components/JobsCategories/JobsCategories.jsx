import React from "react";

const JobsCategories = ({ jobCategories }) => {
  const { icon, category, number_of_jobs: available } = jobCategories;

  return (
    <div className=" rounded bg-purple-50 p-4 text-center cursor-pointer hover:-translate-y-2 duration-300">
      <div className="flex justify-center items-center">
        <img className="h-12 hover:scale-125 duration-300 " src={icon} alt="" />
      </div>
      <p className="font-medium text-slate-600 my-2">{category}</p>
      <p className="text-slate-500">{available}+ Jobs Available</p>
    </div>
  );
};

export default JobsCategories;
