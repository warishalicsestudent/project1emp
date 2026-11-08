function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>Job Smart</h2>

          <p>
            Smart Job and Placement Management System
            for students and recruiters.
          </p>

        </div>


        <div className="footer-section">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/applications">Applications</a>

        </div>


        <div className="footer-section">

          <h3>For Students</h3>

          <a href="/profile">My Profile</a>
          <a href="/jobs">Find Jobs</a>
          <a href="/applications">My Applications</a>

        </div>


        <div className="footer-section">

          <h3>Contact</h3>

          <p>Email: support@jobsmart.com</p>
          <p>Location: India</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Job Smart. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;