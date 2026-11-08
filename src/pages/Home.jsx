import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              🚀 Smart Placement Platform
            </span>

            <h1>
              Find Your Dream Job
              <br />
              <span>Build Your Future</span>
            </h1>

            <p>
              Job Smart is a smart placement management system
              that connects students with job opportunities
              and helps them build a successful career.
            </p>

            <div className="hero-buttons">

              <Link
                to="/jobs"
                className="hero-primary-btn"
              >
                Explore Jobs
              </Link>

              <Link
                to="/register"
                className="hero-secondary-btn"
              >
                Get Started
              </Link>

            </div>

          </div>


          {/* Right Side Card */}

          <div className="hero-card">

            <div className="hero-card-icon">
              💼
            </div>

        

            <div className="hero-mini-stats">

              <div>
                <strong>25+</strong>
                <span>Jobs</span>
              </div>

              <div>
                <strong>150+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>18+</strong>
                <span>Selected</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features Section */}

      <section className="features-section">

        <div className="section-heading">

          <span>WHY JOB SMART?</span>

          <h2>
            Everything You Need for Placement
          </h2>

          <p>
            One simple platform to manage your
            complete placement journey.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🔍
            </div>

            <h3>
              Find Jobs
            </h3>

            <p>
              Search for jobs according to your
              skills and career interests.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📝
            </div>

            <h3>
              Easy Application
            </h3>

            <p>
              Apply for suitable jobs quickly
              and easily.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Track Applications
            </h3>

            <p>
              Track your applications and check
              your current application status.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              👨‍💼
            </div>

            <h3>
              Recruiter Management
            </h3>

            <p>
              Recruiters can post jobs and manage
              student applications easily.
            </p>

          </div>

        </div>

      </section>


      {/* Call To Action */}

      <section className="home-cta">

        <div>

          <h2>
            Ready to Start Your Career?
          </h2>

          <p>
            Register now and explore the latest
            job opportunities.
          </p>

        </div>

        <Link
          to="/register"
          className="cta-btn"
        >
          Register Now
        </Link>

      </section>

    </div>
  );
}

export default Home;