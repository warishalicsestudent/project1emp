import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Jobs() {

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [category, setCategory] = useState("All");
  const [experience, setExperience] = useState("All");

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Bangalore, India",
      salary: "₹6 - 8 LPA",
      category: "Frontend",
      experience: "Fresher"
    },
    {
      title: "Software Developer",
      company: "Infosys",
      location: "Pune, India",
      salary: "₹5 - 7 LPA",
      category: "Software Development",
      experience: "1-2 Years"
    },
    {
      title: "React Developer",
      company: "WebTech Pvt Ltd",
      location: "Remote",
      salary: "₹7 - 10 LPA",
      category: "Frontend",
      experience: "Fresher"
    }
  ];


  const filteredJobs = jobs.filter((job) => {

    const titleMatch =
      job.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase());

    const locationMatch =
      job.location
        .toLowerCase()
        .includes(searchLocation.toLowerCase());

    const categoryMatch =
      category === "All" ||
      job.category === category;

    const experienceMatch =
      experience === "All" ||
      job.experience === experience;

    return (
      titleMatch &&
      locationMatch &&
      categoryMatch &&
      experienceMatch
    );
  });


  const clearFilters = () => {
    setSearchTitle("");
    setSearchLocation("");
    setCategory("All");
    setExperience("All");
  };


  return (
    <section className="jobs-page">

      {/* Header */}
      <div className="jobs-header">

        <h1>Find Your Dream Job</h1>

        <p>
          Explore the latest job opportunities
          and start your career journey.
        </p>

      </div>


      {/* Search & Filters */}
      <div className="job-search">

        <input
          type="text"
          placeholder="Search job title..."
          value={searchTitle}
          onChange={(e) =>
            setSearchTitle(e.target.value)
          }
        />


        <input
          type="text"
          placeholder="Enter location..."
          value={searchLocation}
          onChange={(e) =>
            setSearchLocation(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="All">
            All Categories
          </option>

          <option value="Frontend">
            Frontend
          </option>

          <option value="Software Development">
            Software Development
          </option>

        </select>


        <select
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        >

          <option value="All">
            All Experience
          </option>

          <option value="Fresher">
            Fresher
          </option>

          <option value="1-2 Years">
            1-2 Years
          </option>

        </select>


        <button
          className="clear-filter-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>


      {/* Jobs */}
      <div className="jobs-list">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job, index) => (

            <div
              className="job-card"
              key={index}
            >

              <h2>{job.title}</h2>

              <p>{job.company}</p>

              <p>📍 {job.location}</p>

              <span>{job.salary}</span>

              <div className="job-category">
                {job.category}
              </div>

              <div className="job-experience">
                {job.experience}
              </div>


              <Link
                to="/job-details"
                className="job-apply-btn"
              >
                Apply Now
              </Link>

            </div>

          ))

        ) : (

          <p className="no-jobs">
            No jobs found.
          </p>

        )}

      </div>

    </section>
  );
}

export default Jobs;