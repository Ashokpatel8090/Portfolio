import React from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import Contact from '../components/Contact'
import About from '../components/About'

const HomePage = () => {
  return (
    <>
    <Home/>
    <About/>
    <Projects/>
    <Experiences/>
    <Contact/>
    </>
  )
}

export default HomePage