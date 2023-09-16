import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default Main;
