import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Booking from './pages/Booking/Booking'
import Dishes from './pages/Dishes/Dishes'
import Register from './pages/Register/Register'

import Home from './pages/Home/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Guides from './pages/Guides/Guides'
import Singup from './pages/Singup/Singup'
import About from './pages/About/About'

function App() {
  return (
    <>
  <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              
              <Footer />
            </>
          }
        />
       <Route path="/dishes" element={ <>
              <Header />
              <Dishes />
              
              <Footer />
            </>} />
       
              <Route path="/services" element={ <>
              <Header />
              <Booking />
              
              <Footer />
            </>} />
            <Route path="/about" element={ <>
              <Header />
              <About />
              
              <Footer />
            </>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Singup" element={<Singup/>} />
        <Route path="/Guides" element={<Guides />} />
      </Routes>


    </>
  )
}

export default App