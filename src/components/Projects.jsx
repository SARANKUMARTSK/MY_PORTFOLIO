import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import RuralImage from '../../src/images/Rural.png'
import Recipe from "/src/images/Recipe.png"
import DressSuggestion from '../../src/images/DressSuggestion.png'
import OrderApp from '../../src/images/OrderApp.png'

function Projects() {
  let [data,setData] = useState([
    {
      image : OrderApp,
      name : "Order Management",
      content : "A dynamic E-commerce application built with HTML, CSS, JS, React, Node.js, and MongoDB. Features Role-Based Authentication for secure access control, showcasing proficiency in full-stack development.",
      gitHub : "https://github.com/SARANKUMARTSK/ORDER_MANAGEMENT_FE.git",
      view : "https://bright-swan-63b24a.netlify.app/landing-page"
    },
    {
      image : DressSuggestion,
      name : "Daily Dress Colour Suggestion For Women",
      content : "A personalized fashion application providing daily color recommendations for women's attire. Developed with HTML, CSS, JS, React, Node.js, and MongoDB, it offers a seamless user experience and highlights expertise in full-stack development.",
      gitHub : "https://github.com/SARANKUMARTSK/DAILY-DRESS-COLOR-SUGGESTION-FOR-WOMEN-FRONTEND.git",
      view : "https://legendary-froyo-b91394.netlify.app/landing-page"
    },
    {
      image : Recipe,
      name : "Recipe App",
      content : "Developed a secure recipe application with the MERN stack, utilizing JWT and bcrypt to ensure only authenticated users can view and save recipes. This approach guarantees personalized and private access to culinary collections.",
      gitHub : "https://github.com/SARANKUMARTSK/RECEIPE_APP_FE.git",
      view : "https://ubiquitous-malabi-2bdcaf.netlify.app"
    },
    {
      image : RuralImage,
      name : "Rural Development App",
      content : "Developed a comprehensive rural development application using the MERN stack, integrating JWT and bcrypt for robust security. This platform facilitates efficient resource management and community engagement, ensuring data integrity and user authentication. ",
      gitHub : "https://github.com/SARANKUMARTSK/RURAL_DEVELOPMENT_FE.git",
      view : "https://effervescent-banoffee-bf65cb.netlify.app"
    }
    
  ])
  return <>
  <div id='projects' className="project-page">
  <h3 className='headings'>Projects</h3>
    <div className='heading-span'>Most recent work</div>
  
  {
    data.map((e,i)=>{
      return <div key={i} className="project-container">
      <div className="project-image-container">
        <img src={e.image} alt="" />
      </div>
      <div className="project-content-container">
        <h3>{e.name}</h3>
        <p>{e.content}</p>
        <div className='button-container'>
          <button><a href={e.gitHub}  target='_blank'>GitHub <FontAwesomeIcon icon={faGithub} /></a></button>
          <button><a href={e.view}  target='_blank'>View <FontAwesomeIcon icon={faAnglesRight} /></a></button>
        </div>
      </div>
    </div>
    })
  }

  </div>
  </>
}

export default Projects