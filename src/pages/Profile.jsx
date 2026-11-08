import "../App.css";

function Profile() {
  return (
    <section className="profile-page">

      <div className="profile-container">

        {/* Profile Header */}
        <div className="profile-header">

          <div className="profile-avatar">
            👤
          </div>

          <div className="profile-title">
            <h1>Student Profile</h1>
            <p>Manage your personal and academic information.</p>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>


        {/* Personal Information */}
        <div className="profile-card">

          <h2>Personal Information</h2>

          <div className="profile-grid">

            <div className="profile-item">
              <span>Full Name</span>
              <strong>Warish Ali</strong>
            </div>

            <div className="profile-item">
              <span>Email Address</span>
              <strong>student@example.com</strong>
            </div>

            <div className="profile-item">
              <span>Phone Number</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="profile-item">
              <span>Location</span>
              <strong>Bihar, India</strong>
            </div>

          </div>

        </div>


        {/* Education */}
        <div className="profile-card">

          <h2>Education</h2>

          <div className="education-item">

            <div>
              <h3>B.Tech — Computer Science & Engineering</h3>
              <p>Government Engineering College</p>
            </div>

            <span>2023 - 2027</span>

          </div>

        </div>


        {/* Skills */}
        <div className="profile-card">

          <h2>Skills</h2>

          <div className="skills-list">

            <span>C++</span>
            <span>Data Structures</span>
            <span>OOPS</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>

          </div>

        </div>


        {/* Resume */}
        <div className="profile-card resume-card">

          <div>
            <h2>Resume</h2>
            <p>Your latest resume is available here.</p>
          </div>

          <button className="resume-btn">
            View Resume
          </button>

        </div>

      </div>

    </section>
  );
}

export default Profile;