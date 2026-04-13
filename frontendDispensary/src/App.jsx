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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
