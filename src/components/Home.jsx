import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myImage from '/src/images/TSK-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
import myResume from "/src/Files/SARAN_FSD_RESUME.pdf.pdf"


function Home({theme}) {
  return (
    <div id='home' className= {`home-page ${theme?"bg-light-theme":"bg-dark-theme"}`}>

        <div className="home-right-container">
              <img src={myImage} alt="" />
              <div className='home-icons'>
                <a href="https://github.com/SARANKUMARTSK"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/saran-kumar-17563a250/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
        </div>

        <div className="home-left-container">
            <span>Hi, Iam Saran</span>
           <div className='type-animate-container'>
           {
                <TypeAnimation
                sequence={[
                'Full Stack Developer',
                3000, 
                'MERN Stack Developer',
                3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            }
           </div>
           <div className='button-container'>
              <button ><Link to='contact'  smooth={true} duration={800}>Contact Me   &nbsp;<FontAwesomeIcon icon={faEnvelope} /></Link></button>
              <button><a  style={{textDecoration:"none" , color:"inherit"}} href={myResume}>Download Resume &nbsp; <FontAwesomeIcon icon={faFileArrowDown} /></a></button>
            </div>
        </div>

    </div>
  )
}

export default Home





