import { useState } from "react";
import "../App.css";

function PostJob() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="post-job-page">

      <div className="post-job-container">

        {!submitted ? (

          <>
            <div className="post-job-header">

              <h1>Post a New Job</h1>

              <p>
                Add a new job opportunity for students.
              </p>

            </div>


            <form
              className="post-job-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label>Job Title</label>

                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>Company Name</label>

                  <input
                    type="text"
                    placeholder="e.g. Tech Solutions"
                    required
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label>Location</label>

                  <input
                    type="text"
                    placeholder="e.g. Bangalore, India"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>Salary</label>

                  <input
                    type="text"
                    placeholder="e.g. ₹6 - 8 LPA"
                    required
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label>Category</label>

                  <select required>

                    <option value="">
                      Select Category
                    </option>

                    <option value="Frontend">
                      Frontend
                    </option>

                    <option value="Backend">
                      Backend
                    </option>

                    <option value="Full Stack">
                      Full Stack
                    </option>

                    <option value="Software Development">
                      Software Development
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>Experience</label>

                  <select required>

                    <option value="">
                      Select Experience
                    </option>

                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="1-2 Years">
                      1-2 Years
                    </option>

                    <option value="2-5 Years">
                      2-5 Years
                    </option>

                  </select>

                </div>

              </div>


              <div className="form-group">

                <label>Job Description</label>

                <textarea
                  rows="6"
                  placeholder="Write job description..."
                  required
                ></textarea>

              </div>


              <div className="form-group">

                <label>Required Skills</label>

                <input
                  type="text"
                  placeholder="e.g. HTML, CSS, JavaScript, React.js"
                  required
                />

              </div>


              <button
                type="submit"
                className="post-job-btn"
              >
                Post Job
              </button>

            </form>

          </>

        ) : (

          <div className="post-job-success">

            <div className="success-icon">
              ✓
            </div>

            <h1>Job Posted Successfully!</h1>

            <p>
              The new job opportunity has been added
              successfully.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default PostJob;