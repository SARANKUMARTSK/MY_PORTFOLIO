import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faInstagram,faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return <>
  <div className='footer-page'>
    <div className='footoer-top-content'>
        <div className='footer-icon-set'>
            <a href="https://github.com/SARANKUMARTSK"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/saran-kumar-17563a250/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/_charan_tsk_/?next=%2F"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=100009111732920"><FontAwesomeIcon icon={faSquareFacebook} /></a>
        </div>
    </div>
    <div className='created-by'>
        By Saran Kumar
    </div>
  </div>
  </>
}

export default Footer