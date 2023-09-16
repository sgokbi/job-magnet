const getJobsDataFromLocalStorage = () => {
  let jobsData = {};

  // get jobs data from local storage
  const storedJobs = localStorage.getItem("jobs-data");
  if (storedJobs) {
    jobsData = JSON.parse(storedJobs);
  }

  return jobsData;
};

const addAppliedJobToLocalStorage = (id) => {
  let jobsData = getJobsDataFromLocalStorage();

  jobsData[id] = 1;

  localStorage.setItem("jobs-data", JSON.stringify(jobsData));
};

export { addAppliedJobToLocalStorage, getJobsDataFromLocalStorage };
