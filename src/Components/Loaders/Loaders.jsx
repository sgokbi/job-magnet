const loaders = async () => {
  const loadedJobCategories = await fetch("jobCategories.json");
  const jobsCategories = await loadedJobCategories.json();

  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();

  return [jobsCategories, jobs];
};

const jobsLoaders = async () => {
  const loadedJobs = await fetch("jobs.json");
  const jobs = loadedJobs.json();
  return jobs;
};

const blogsLoaders = async () => {
  const loadedBlog = await fetch("blogs.json");
  const blogs = loadedBlog.json();
  return blogs;
};

export { loaders, jobsLoaders, blogsLoaders };
