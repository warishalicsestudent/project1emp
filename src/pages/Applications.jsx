import "../App.css";

function Applications() {
  return (
    <section className="applications-page">

      <div className="applications-container">

        {/* Page Header */}
        <div className="applications-header">

          <h1>My Applications</h1>

          <p>
            Track all your job applications and their current status.
          </p>

        </div>


        {/* Application 1 */}
        <div className="application-card">

          <div className="application-info">

            <h2>Frontend Developer</h2>

            <p>Tech Solutions</p>

            <span>📍 Bangalore, India</span>

            <span>💰 ₹6 - 8 LPA</span>

          </div>

          <div className="application-status">

            <span className="status shortlisted">
              Shortlisted
            </span>

            <p>Applied on: 20 Sep 2026</p>

          </div>

        </div>


        {/* Application 2 */}
        <div className="application-card">

          <div className="application-info">

            <h2>Software Developer</h2>

            <p>Infosys</p>

            <span>📍 Pune, India</span>

            <span>💰 ₹5 - 7 LPA</span>

          </div>

          <div className="application-status">

            <span className="status pending">
              Pending
            </span>

            <p>Applied on: 18 Sep 2026</p>

          </div>

        </div>


        {/* Application 3 */}
        <div className="application-card">

          <div className="application-info">

            <h2>React Developer</h2>

            <p>WebTech Pvt Ltd</p>

            <span>📍 Remote</span>

            <span>💰 ₹7 - 10 LPA</span>

          </div>

          <div className="application-status">

            <span className="status selected">
              Selected
            </span>

            <p>Applied on: 15 Sep 2026</p>

          </div>

        </div>


      </div>

    </section>
  );
}

export default Applications;