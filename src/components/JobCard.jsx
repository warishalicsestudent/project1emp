function JobCard({ role, company, location, salary, type }) {
  return (
    <div className="job-card">

      <div className="job-icon">
        💼
      </div>

      <div className="job-info">
        <h3>{role}</h3>

        <p className="company-name">
          {company}
        </p>

        <p className="job-location">
          📍 {location}
        </p>

        <div className="job-details">
          <span>{salary}</span>
          <span>{type}</span>
        </div>

        <button className="apply-btn">
          Apply Now
        </button>
      </div>

    </div>
  );
}

export default JobCard;