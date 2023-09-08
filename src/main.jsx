import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
