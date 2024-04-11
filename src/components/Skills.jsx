import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,faCss3Alt,faSquareJs,faBootstrap,faReact ,faNodeJs,faNode,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import mernImage from "/src/images/MERN-PIC.png"

function Skills({theme}) {
  return <>
  <div id='skills' className= {`skill-page ${theme?"bg-light-theme":"bg-dark-theme"}`}>
    <h3 className='headings'>Skills</h3>
    <div className='heading-span'>My Technical Skills</div>
    <div className="skills-container">
        
        <div className="right-skill-container">
                <div className="skill"><button>HTML &nbsp;<FontAwesomeIcon icon={faHtml5} /></button></div>
                <div className="skill"><button>CSS &nbsp; <FontAwesomeIcon icon={faCss3Alt} /></button></div>
                <div className="skill"><button>JavaScript &nbsp; <FontAwesomeIcon icon={faSquareJs} /></button></div>
                <div className="skill"><button>Bootstrap &nbsp; <FontAwesomeIcon icon={faBootstrap} /></button></div>
                <div className="skill"><button>React Js &nbsp; <FontAwesomeIcon icon={faReact} /></button></div>
                <div className="skill"><button>Node Js &nbsp; <FontAwesomeIcon icon={faNode} /></button></div>
                <div className="skill"><button>Express Js &nbsp; <FontAwesomeIcon icon={faNodeJs} /> </button></div>
                <div className="skill"><button>Mongo DB &nbsp;<FontAwesomeIcon icon={faDatabase} /> </button></div>
                <div className="skill"><button>My SQL &nbsp;<FontAwesomeIcon icon={faDatabase} /> </button></div>
                <div className="skill"><button>GitHub &nbsp; <FontAwesomeIcon icon={faGithub} /></button></div>
                <div className="skill"><button>Postman &nbsp; </button></div>
        </div>

        <div className="left-skill-container">
             <img src={mernImage} alt="" />
        </div>



    </div>
  </div>
  </>
}

export default Skills