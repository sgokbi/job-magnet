const jobCategoriesLoaders = async () => {
  const loadedJobCategories = await fetch("jobCategories.json");
  const jobsCategories = await loadedJobCategories.json();

  return jobsCategories;
};

export { jobCategoriesLoaders };
