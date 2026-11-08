import "../App.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <section className="admin-page">

      <div className="admin-container">

        {/* Header */}
        <div className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>

            <p>
              Manage students, jobs and placement applications.
            </p>
          </div>

          <div className="admin-badge">
            Admin Panel
          </div>

        </div>


        {/* Statistics */}
        <div className="admin-stats">

          <div className="admin-stat-card">
            <span>💼</span>
            <h2>25</h2>
            <p>Total Jobs</p>
          </div>


          <div className="admin-stat-card">
            <span>👨‍🎓</span>
            <h2>150</h2>
            <p>Total Students</p>
          </div>


          <div className="admin-stat-card">
            <span>📝</span>
            <h2>85</h2>
            <p>Total Applications</p>
          </div>


          <div className="admin-stat-card">
            <span>✅</span>
            <h2>18</h2>
            <p>Selected Students</p>
          </div>

        </div>


        {/* Management Sections */}
        <div className="admin-content">

          {/* Job Management */}
          <div className="admin-card">

            <h2>Job Management</h2>

            <p>
              Add, edit and manage job opportunities.
            </p>

            <Link
              to="/post-job"
              className="admin-manage-btn"
            >
              Manage Jobs
            </Link>

          </div>


          {/* Application Management */}
          <div className="admin-card">

            <h2>Application Management</h2>

            <p>
              Review and manage student applications.
            </p>

            <Link
              to="/admin-applications"
              className="admin-manage-btn"
            >
              Manage Applications
            </Link>

          </div>


          {/* Student Management */}
          <div className="admin-card">

            <h2>Student Management</h2>

            <p>
              View and manage registered students.
            </p>

            <Link
              to="/student-management"
              className="admin-manage-btn"
            >
              Manage Students
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;