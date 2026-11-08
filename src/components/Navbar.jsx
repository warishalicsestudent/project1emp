import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Job Smart
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/jobs">
          Jobs
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/applications">
          Applications
        </Link>

      </div>

      <div className="nav-buttons">

        <Link
          to="/login"
          className="login-btn"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="register-btn"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;