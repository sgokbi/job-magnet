import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Statistics from "./Components/Statistics/Statistics.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Main from "./Components/Main/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import {
  blogsLoaders,
  jobsLoaders,
  loaders,
} from "./Components/Loaders/Loaders.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loaders,
      },
      {
        path: "/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => {
          const id = params.jobId;
          return id;
        },
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: jobsLoaders,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
        loader: blogsLoaders,
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
