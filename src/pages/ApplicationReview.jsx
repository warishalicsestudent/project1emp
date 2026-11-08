import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function ApplicationReview() {

  const [status, setStatus] = useState("Pending");

  return (
    <section className="review-page">

      <div className="review-container">

        {/* Header */}
        <div className="review-header">

          <div>
            <h1>Application Review</h1>

            <p>
              Review student application details.
            </p>
          </div>

          <Link
            to="/admin-applications"
            className="back-btn"
          >
            ← Back to Applications
          </Link>

        </div>


        {/* Student Information */}
        <div className="review-card">

          <h2>Student Information</h2>

          <div className="review-grid">

            <div className="review-item">
              <span>Full Name</span>
              <strong>Warish Ali</strong>
            </div>

            <div className="review-item">
              <span>Email</span>
              <strong>student@example.com</strong>
            </div>

            <div className="review-item">
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="review-item">
              <span>Qualification</span>
              <strong>B.Tech CSE</strong>
            </div>

          </div>

        </div>


        {/* Job Information */}
        <div className="review-card">

          <h2>Job Information</h2>

          <div className="review-grid">

            <div className="review-item">
              <span>Job Title</span>
              <strong>Frontend Developer</strong>
            </div>

            <div className="review-item">
              <span>Company</span>
              <strong>Tech Solutions</strong>
            </div>

            <div className="review-item">
              <span>Location</span>
              <strong>Bangalore, India</strong>
            </div>

            <div className="review-item">
              <span>Salary</span>
              <strong>₹6 - 8 LPA</strong>
            </div>

          </div>

        </div>


        {/* Skills */}
        <div className="review-card">

          <h2>Skills</h2>

          <div className="skills-list">

            <span>C++</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>

          </div>

        </div>


        {/* Application Status */}
        <div className="review-card">

          <h2>Application Status</h2>

          <p className={`current-status ${status.toLowerCase()}`}>
            Current Status: <strong>{status}</strong>
          </p>

          <div className="review-actions">

            <button
              className="review-pending"
              onClick={() => setStatus("Pending")}
            >
              Pending
            </button>

            <button
              className="review-shortlisted"
              onClick={() => setStatus("Shortlisted")}
            >
              Shortlist
            </button>

            <button
              className="review-selected"
              onClick={() => setStatus("Selected")}
            >
              Select
            </button>

            <button
              className="review-rejected"
              onClick={() => setStatus("Rejected")}
            >
              Reject
            </button>

          </div>

        </div>


        {/* Resume */}
        <div className="review-card resume-review">

          <div>
            <h2>Resume</h2>

            <p>
              Student resume is available for review.
            </p>
          </div>

          <button className="view-resume-btn">
            View Resume
          </button>

        </div>

      </div>

    </section>
  );
}

export default ApplicationReview;