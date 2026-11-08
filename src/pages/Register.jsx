import "../App.css";

function Register() {
  return (
    <section className="register-page">

      <div className="register-container">

        <div className="register-info">

          <h1>Join Job Smart</h1>

          <p>
            Create your account and take the
            next step toward your dream career.
          </p>

          <div className="register-benefits">
            <p>✓ Discover new job opportunities</p>
            <p>✓ Apply to your favorite jobs</p>
            <p>✓ Track your applications</p>
            <p>✓ Build your professional profile</p>
          </div>

        </div>


        <div className="register-box">

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Register as a student
          </p>

          <form>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />


            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />


            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
            />


            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />


            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
            />


            <button className="register-submit">
              Create Account
            </button>

          </form>


          <p className="login-text">
            Already have an account?
            <a href="#">
              Login
            </a>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;