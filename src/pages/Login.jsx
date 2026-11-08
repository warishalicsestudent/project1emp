import "../App.css";

function Login() {
  return (
    <section className="login-page">

      <div className="login-container">

        <div className="login-info">

          <h1>Welcome Back!</h1>

          <p>
            Login to Job Smart and continue
            your placement journey.
          </p>

          <div className="login-benefits">
            <p>✓ Explore latest job opportunities</p>
            <p>✓ Apply for jobs easily</p>
            <p>✓ Track your applications</p>
            <p>✓ Manage your profile</p>
          </div>

        </div>


        <div className="login-box">

          <h2>Login</h2>

          <p className="login-subtitle">
            Login to your student account
          </p>

          <form>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />


            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />


            <div className="remember-row">

              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>


            <button className="login-submit">
              Login
            </button>

          </form>


          <p className="register-text">
            Don't have an account?
            <a href="#">
              Register
            </a>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;