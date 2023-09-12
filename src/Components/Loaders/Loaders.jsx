const loaders = async () => {
  const loadedJobCategories = await fetch("jobCategories.json");
  const jobsCategories = await loadedJobCategories.json();

  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();

  return [jobsCategories, jobs];
};

// const jobsLoaders = async () => {
//   const loadedJobs = await fetch("jobs.jso");
//   const jobs = loadedJobs.json();
//   return jobs;
// };

export { loaders };
