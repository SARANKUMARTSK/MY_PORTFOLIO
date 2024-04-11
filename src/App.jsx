import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Qualification from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
export const API_URL = "http://localhost:3000"

function App() {
  const [theme, setTheme] = useState('false')
  return <>
  <Navbar theme={theme} setTheme={setTheme}/>
  <div className= {`wrapper ${theme?"bg-light-theme":"bg-dark-theme"}`} >
      <Home theme={theme} />
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Projects theme={theme}/>
  </div>
      <Contact theme={theme}/>
      <Qualification/>  

  </>
}

export default App