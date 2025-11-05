import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './components/login';
import Home from './components/home';
import Admin from './components/admin/admin';
import Sidebar from './components/admin/sidebar';
import Students from './components/admin/Students';
import About from './components/about';
import UserLogin from './components/userLogin';
import Signupform from './components/signupform';
import StudentSidebar from './components/student_board/student_sidebar';
import Studentdashboard from './components/student_board/student_dashboard';
import Upload from './components/student_board/upload';

function App() {
  return (
    <>
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/" element={<Home />} />
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/sidebar' element={<Sidebar/>}/>
     <Route path='/Students' element={<Students/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/userLogin' element={<UserLogin/>}/>
     <Route path='/signup' element={<Signupform/>}/>
     <Route path='/studentsidebar' element={<StudentSidebar/>}/>
     <Route path='/Studentdashboard' element={<Studentdashboard/>}/>
     <Route path='/Upload' element={<Upload/>}/>









     </Routes>
    </>
  )
}

export default App
