import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Login from './pages/Login/login';
import Stock from './pages/Stock/stock';
import AdminDashboard from './pages/Admin/Dashboard/adminDashboard';
import RegisterStudent from './pages/Admin/RegisterStudent/registerStudent';
import ManageMedicine from './pages/Admin/ManageMedicine/manageMedicine';
import Record from './pages/Admin/Records/record';
import Facility from './pages/Admin/Facility/facility';
import NearByHospital from './pages/Admin/NearByHospital/nearByHospital';
import AdminGallery from './pages/Admin/Gallery/adminGallery';  
import StudentDashboard from './pages/Student/studentDashboard';



function App() {
  

  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/register-student' element={<RegisterStudent />} />
        <Route path='/admin/manage-medicine' element={<ManageMedicine />} />
        <Route path='/admin/record' element={<Record />} />
        <Route path='/admin/facility' element={<Facility />} />
        <Route path='/admin/nearByHospital' element={<NearByHospital />} />
        <Route path='/admin/gallery' element={<AdminGallery />} />
        <Route path='/student/:id' element={<StudentDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
