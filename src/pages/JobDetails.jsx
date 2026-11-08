import "../App.css";
import { Link } from "react-router-dom";

function JobDetails() {
  return (
    <section className="job-details-page">

      <div className="job-details-container">

        <div className="job-details-header">

          <h1>Frontend Developer</h1>

          <p className="job-company">
            Tech Solutions
          </p>

          <div className="job-meta">

            <span>📍 Bangalore, India</span>

            <span>💰 ₹6 - 8 LPA</span>

            <span>💼 Full Time</span>

          </div>

        </div>


        <div className="job-description">

          <h2>Job Description</h2>

          <p>
            We are looking for a passionate Frontend Developer
            who can build modern, responsive and user-friendly
            web applications.
          </p>


          <h2>Required Skills</h2>

          <ul>

            <li>HTML and CSS</li>

            <li>JavaScript</li>

            <li>React.js</li>

            <li>Responsive Web Design</li>

            <li>Basic Git and GitHub</li>

          </ul>


          <h2>Responsibilities</h2>

          <ul>

            <li>
              Develop responsive web applications.
            </li>

            <li>
              Work with React.js components.
            </li>

            <li>
              Improve website performance and UI.
            </li>

            <li>
              Collaborate with development teams.
            </li>

          </ul>


          <Link
            to="/apply"
            className="apply-job-btn"
          >
            Apply Now
          </Link>

        </div>

      </div>

    </section>
  );
}

export default JobDetails;