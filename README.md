# JobMagnet

## [JobMagnet](https://job-magnet.netlify.app/)

### Introduction

This is a react-router project about job-searching. People can search for jobs and apply as well. This website is focused on the front-end site. The data for job-related information are created and used in the public folder as a JSON format.

### Features and how it works

- On the Home page, job categories and job posts are displayed. When the page first loads, only four jobs will be displayed, and when the user clicks the "Show More" button another four jobs will be displayed along with the other four jobs, and this thing will repeat every time when the "Show More" button clicks. On job posts, there is a button for "view details" and when the user clicks this button it will direct to a page of the details of the job that are clicked. And, after that user can see all the details information and can apply for the job by clicking the apply now button. When the user clicks the "apply now" button, a successful job-applied message will appear at the top of the website.
- on the Applied Jobs page, Users can see the list of the jobs that they already applied for. This feature keeps a record of the applied job. Local storage is used to keep the data and restore it when the user comes back website.
- On the Statistics page, bar charts are displayed of average job openings, average job seekers, and the average hiring index through past years.
- On the Blog pages, some blogs are displayed related to careers.

All the data - Job Categories, Job Posts, Statistics, and Blogs are created manually and put in the public folder as a JSON data format.

### Technologies used for this project

- React Router(https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders)
- Font Awesome(https://fontawesome.com/search), is used for the icons.
- Tailwind CSS(https://tailwindcss.com/docs/installation), is used as a CSS Framework for the style
- Recharts(https://recharts.org/en-US/examples), is a composable charting library built on React components. It is used to create bar charts on the statistics page.
