import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Login from './pages/Login/login';
import Stock from './pages/Stock/stock';
import AdminDashboard from './pages/Admin/Dashboard/adminDashboard';



function App() {
  

  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
