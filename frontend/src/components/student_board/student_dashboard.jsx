import React from "react";
import StudentSidebar from "./student_sidebar";
import "./student-bar.css"

export default function StudentDashboard() {
  return (
    <div className="dashboard-layout">
      <StudentSidebar />
      <main className="dashboard-content">
        <h1>Welcome to Dashboard</h1>
      </main>
    </div>
  );
}

