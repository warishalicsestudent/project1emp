import "../App.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="dashboard-page">

      <div className="dashboard-container">

        {/* Dashboard Header */}
        <div className="dashboard-header">

          <div>
            <h1>Student Dashboard</h1>

            <p>
              Welcome back! Manage your placement journey.
            </p>
          </div>

          <Link
            to="/profile"
            className="dashboard-profile-btn"
          >
            My Profile
          </Link>

        </div>


        {/* Statistics */}
        <div className="dashboard-stats">

          <div className="dashboard-stat-card">
            <h3>12</h3>
            <p>Jobs Available</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>5</h3>
            <p>Applied Jobs</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>2</h3>
            <p>Shortlisted</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>1</h3>
            <p>Selected</p>
          </div>

        </div>


        {/* Main Dashboard */}
        <div className="dashboard-content">

          {/* Recent Applications */}
          <div className="dashboard-card">

            <h2>Recent Applications</h2>

            <div className="application-item">

              <div>
                <h3>Frontend Developer</h3>
                <p>Tech Solutions</p>
              </div>

              <span className="status shortlisted">
                Shortlisted
              </span>

            </div>


            <div className="application-item">

              <div>
                <h3>Software Developer</h3>
                <p>Infosys</p>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>


            <div className="application-item">

              <div>
                <h3>React Developer</h3>
                <p>WebTech Pvt Ltd</p>
              </div>

              <span className="status selected">
                Selected
              </span>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="dashboard-card">

            <h2>Quick Actions</h2>

            <Link
              to="/jobs"
              className="dashboard-action"
            >
              Browse Jobs
            </Link>

            <Link
              to="/profile"
              className="dashboard-action"
            >
              Update Profile
            </Link>

            <Link
              to="/applications"
              className="dashboard-action"
            >
              View Applications
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;