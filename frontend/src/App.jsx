import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./components/login";
import Home from "./components/home";
import Admin from "./components/admin/admin";
import Sidebar from "./components/admin/sidebar";
import Students from "./components/admin/Students";
import About from "./components/about";
import UserLogin from "./components/userLogin";
import Signupform from "./components/signupform";
import StudentSidebar from "./components/student_board/student_sidebar";
import Studentdashboard from "./components/student_board/student_dashboard";
import Upload from "./components/student_board/upload";
import { useNavigate } from "react-router-dom";
import Loader from "./components/loader/loader";
import Help from "./components/help";
import Chat from "./components/student_board/chat";

function App() {
  const [authenticate, setauthenticate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("email"))
    if (localStorage.getItem("email")) setauthenticate(true);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/loader" element={<Loader />} />

        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/signup" element={<Signupform />} />
        <Route
          path="/studentsidebar"
          element={authenticate ? <StudentSidebar /> : <UserLogin />}
        />
        <Route path="/Studentdashboard" element={authenticate?<Studentdashboard />:<UserLogin/>} />
        <Route path="/Upload" element={authenticate?<Upload />:<UserLogin/>} />
        <Route path="/chat" element={authenticate?<Chat />:<UserLogin/>} />

      </Routes>
    </>
  );
}

export default App;
