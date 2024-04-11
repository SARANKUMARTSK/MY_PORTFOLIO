import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-scroll'
function Navbar({theme,setTheme}) {
    
  return <>
  <div className= {`navbar ${theme?"bg-light-theme":"bg-dark-theme"}`}  >

    <div className='nav-left-container'>
       <span>S</span>aran &nbsp;<span>K</span>umar 
    </div>

    <div className='nav-right-container '>
       <ul>
        <Link to='home' smooth={true} duration={800}>Home</Link>
        <Link to='about' smooth={true} duration={800}>About</Link>
        <Link to='skills' smooth={true} duration={800}>Skills</Link>
        <Link to='projects' smooth={true} duration={800}>Projects</Link>
        <Link to='contact' smooth={true} duration={800}>Contact</Link>
        <Link to='#' onClick={()=>setTheme(!theme)}><FontAwesomeIcon  icon={faMoon} /></Link>
       </ul>
    </div>

  </div>
  </>
}

export default Navbar