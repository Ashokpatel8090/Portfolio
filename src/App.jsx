import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App