import "../App.css";
import { Link } from "react-router-dom";

function AdminApplications() {

  return (
    <section className="admin-applications-page">

      <div className="admin-applications-container">

        {/* Header */}
        <div className="admin-applications-header">

          <div>
            <h1>Application Management</h1>

            <p>
              Review and manage student job applications.
            </p>
          </div>

          <div className="admin-badge">
            Admin Panel
          </div>

        </div>


        {/* Applications Table */}
        <div className="applications-table-card">

          <h2>Student Applications</h2>

          <div className="applications-table">

            {/* Table Header */}
            <div className="table-header">

              <span>Student</span>
              <span>Job</span>
              <span>Company</span>
              <span>Status</span>
              <span>Action</span>

            </div>


            {/* Application 1 */}
            <div className="table-row">

              <span>Warish Ali</span>

              <span>
                Frontend Developer
              </span>

              <span>
                Tech Solutions
              </span>

              <span className="admin-status pending">
                Pending
              </span>

              <Link
                to="/application-review"
                className="review-application-btn"
              >
                Review
              </Link>

            </div>


            {/* Application 2 */}
            <div className="table-row">

              <span>Rahul Kumar</span>

              <span>
                React Developer
              </span>

              <span>
                WebTech Pvt Ltd
              </span>

              <span className="admin-status shortlisted">
                Shortlisted
              </span>

              <Link
                to="/application-review"
                className="review-application-btn"
              >
                Review
              </Link>

            </div>


            {/* Application 3 */}
            <div className="table-row">

              <span>Aman Kumar</span>

              <span>
                Software Developer
              </span>

              <span>
                Infosys
              </span>

              <span className="admin-status selected">
                Selected
              </span>

              <Link
                to="/application-review"
                className="review-application-btn"
              >
                Review
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdminApplications;