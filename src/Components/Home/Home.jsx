import React from "react";
import Heading from "../Heading/Heading";
import pic from "../../assets/images/heading_pic.png";

const Home = () => {
  return (
    <Heading>
      <div
        className="
  md:flex justify-between my-12 container mx-auto px-16 "
      >
        <div className="order-first md:order-last">
          <img src={pic} alt="" />
        </div>
        <div className="flex justify-start items-center md:w-4/6 w-full mt-16 md:mt-0 ">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-normal leading-tight">
              One Step <br />
              Closer To Your <br />
              <span className="text-purple-600">Dream Job</span>
            </h1>

            <p className="my-6 md:w-9/12 w-full leading-7 text-slate-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              eaque qui libero! Non ipsam quidem culpa, amet quae adipisci
              necessitatibus repellat doloremque quisquam laborum tempora. Quasi
              consequatur harum nihil?
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold p-3 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Heading>
  );
};

export default Home;
