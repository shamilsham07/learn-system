import React from 'react'
import StudentSidebar from './student_sidebar'

export default function Chat() {
  return (
    <>
        <div className="dashboard-layout">
            <StudentSidebar active={"chat"}/>
              <main className="dashboard-content w-100">
                <div className="chat-section"></div>
              </main>
        </div>

    </>
  )
}
