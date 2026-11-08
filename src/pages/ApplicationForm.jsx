import { useState } from "react";
import "../App.css";

function ApplicationForm() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="application-page">

      <div className="application-container">

        {!submitted ? (

          <>
            <div className="application-header">

              <h1>Job Application</h1>

              <p>
                Apply for your desired job and take
                the next step toward your career.
              </p>

            </div>


            <form
              className="application-form"
              onSubmit={handleSubmit}
            >

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
              />


              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />


              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />


              <label>Highest Qualification</label>

              <input
                type="text"
                placeholder="e.g. B.Tech CSE"
                required
              />


              <label>Skills</label>

              <input
                type="text"
                placeholder="e.g. C++, React, JavaScript"
                required
              />


              <label>Resume</label>

              <input
                type="file"
                required
              />


              <label>Cover Letter</label>

              <textarea
                rows="5"
                placeholder="Write a short cover letter..."
                required
              ></textarea>


              <button type="submit">
                Submit Application
              </button>

            </form>
          </>

        ) : (

          <div className="application-success">

            <div className="success-icon">
              ✓
            </div>

            <h1>
              Application Submitted!
            </h1>

            <p>
              Your application has been submitted
              successfully.
            </p>

            <p>
              We wish you the best for your career journey.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default ApplicationForm;