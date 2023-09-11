import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Header class=""></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
