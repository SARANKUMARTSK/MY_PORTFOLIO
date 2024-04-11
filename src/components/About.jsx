import React from 'react'
import developerImage from '/src/images/developer-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function About({theme}) {
  return <>
  <div id='about' className= {`about-page ${theme?"bg-light-theme":"bg-dark-theme"}`}>
  <h3 className='headings'>About</h3>
    <div className='heading-span'>My Introduction</div>
    <div className='about-container'>
        <div className='about-image-container'>
           <img src={developerImage} alt="" />
        </div>
        <div className="about-content-container">
            <div className="about-content-top">
                <div>
                    <i><FontAwesomeIcon icon={faBriefcase} /></i>
                    <h3>Experience</h3>
                    <br />
                    <h3> MERN Stack Developer  </h3>
                    <span color='white'>Fresher</span>
                     
                    <h3>Previous Experience</h3>
                    <p>Suguna Foods Private Limited</p>
                    <p>Poultry Industry - 5 Years</p>
                </div>
                <div>
                    <i><FontAwesomeIcon icon={faUserGraduate} /></i>
                    <h3>Education</h3>
                    <br />
                    <h3>Under Graduation</h3>
                    <p>B.Sc(Mathematics)</p>
                    <p>Sree Saraswathy Thyagaraja College,Pollachi</p>
                    <br />
                    <h3>Full Stack Developement</h3>
                    <p>Guvi Geek Network</p>
                    

                </div>
            </div>
            <div className="about-content-bottom">
                    {/* Highly motivated and recently Certified in Full Stack Web Development with a solid foundation in programming and problem-solving. Eager to apply academic knowledge to real-world Projects and contribute to innovative solutions . Possesses strong communication skill , adaptability , and a passion for continuous learning . Enthusiastic about collaborating in team environment to drive impactful results  */}
            </div>
        </div>
    </div>
  </div>
  </>
}

export default About