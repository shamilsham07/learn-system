import React, { useState } from "react";
import "./student-bar.css";

export default function StudentSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <i class="bi bi-x text-white"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="student-icon">
            <i className="bi bi-book-half"></i>
            <p>
              Learn
              <br />
              Platform
            </p>
          </div>
        </div>

        <ul className="sidebar-menu w-100 gap-2">
          <li className="active">Dashboard</li>
          <li>Upload</li>
          <li>Quiz</li>
          <li>Teachers</li>
        </ul>

        <div className="sidebar-footer">
          <h6>Logout</h6>
        </div>
      </aside>
    </>
  );
}
