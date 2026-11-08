import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import ApplicationForm from "./pages/ApplicationForm";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import AdminDashboard from "./pages/AdminDashboard";
import PostJob from "./pages/PostJob";
import AdminApplications from "./pages/AdminApplications";
import ApplicationReview from "./pages/ApplicationReview";
import StudentManagement from "./pages/StudentManagement";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/job-details"
          element={<JobDetails />}
        />

        <Route
          path="/apply"
          element={<ApplicationForm />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/post-job"
          element={<PostJob />}
        />

        <Route
          path="/admin-applications"
          element={<AdminApplications />}
        />

        <Route
          path="/application-review"
          element={<ApplicationReview />}
        />

        <Route
          path="/student-management"
          element={<StudentManagement />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;