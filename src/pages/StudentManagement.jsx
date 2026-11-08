import { useState } from "react";
import "../App.css";

function StudentManagement() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Warish Ali",
      email: "warish@example.com",
      course: "B.Tech CSE",
      year: "3rd Year",
      status: "Active"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      course: "B.Tech CSE",
      year: "3rd Year",
      status: "Active"
    },
    {
      id: 3,
      name: "Aman Kumar",
      email: "aman@example.com",
      course: "B.Tech IT",
      year: "4th Year",
      status: "Active"
    },
    {
      id: 4,
      name: "Priya Singh",
      email: "priya@example.com",
      course: "B.Tech CSE",
      year: "4th Year",
      status: "Inactive"
    }
  ]);

  const toggleStatus = (id) => {

    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Active"
                  ? "Inactive"
                  : "Active"
            }
          : student
      )
    );
  };

  return (
    <section className="student-management-page">

      <div className="student-management-container">

        {/* Header */}
        <div className="student-management-header">

          <div>
            <h1>Student Management</h1>

            <p>
              View and manage registered students.
            </p>
          </div>

          <div className="admin-badge">
            Admin Panel
          </div>

        </div>


        {/* Statistics */}
        <div className="student-stats">

          <div className="student-stat-card">
            <span>👨‍🎓</span>
            <h2>{students.length}</h2>
            <p>Total Students</p>
          </div>

          <div className="student-stat-card">
            <span>✅</span>

            <h2>
              {
                students.filter(
                  (student) => student.status === "Active"
                ).length
              }
            </h2>

            <p>Active Students</p>
          </div>

          <div className="student-stat-card">
            <span>⏸️</span>

            <h2>
              {
                students.filter(
                  (student) => student.status === "Inactive"
                ).length
              }
            </h2>

            <p>Inactive Students</p>
          </div>

        </div>


        {/* Student Table */}
        <div className="student-table-card">

          <h2>Registered Students</h2>

          <div className="student-table">

            {/* Table Header */}
            <div className="student-table-header">

              <span>Name</span>
              <span>Email</span>
              <span>Course</span>
              <span>Year</span>
              <span>Status</span>
              <span>Action</span>

            </div>


            {/* Student Rows */}
            {students.map((student) => (

              <div
                className="student-table-row"
                key={student.id}
              >

                <span className="student-name">
                  {student.name}
                </span>

                <span>
                  {student.email}
                </span>

                <span>
                  {student.course}
                </span>

                <span>
                  {student.year}
                </span>

                <span
                  className={
                    student.status === "Active"
                      ? "student-status active"
                      : "student-status inactive"
                  }
                >
                  {student.status}
                </span>

                <button
                  className="student-action-btn"
                  onClick={() => toggleStatus(student.id)}
                >
                  {student.status === "Active"
                    ? "Deactivate"
                    : "Activate"}
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default StudentManagement;