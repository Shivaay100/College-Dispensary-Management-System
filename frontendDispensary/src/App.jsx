import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';



function App() {
  

  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
