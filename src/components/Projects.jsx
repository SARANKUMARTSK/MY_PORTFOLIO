// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons/faSquareUpRight';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';

// function Projects() {

//     let [data,setData] = useState([
//         {
//             name : "Order Management",
//             paragraph :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique delectus impedit reiciendis et alias sint ipsum cumque numquam optio ea dignissimos id sapiente cupiditate, laboriosam praesentium, animi fuga enim harum.",
//             image :"https://images.edrawsoft.com/articles/wardrobe-designer/part1.png",
//             github : "",
//             deploy : ""
//         },
//         {
//             name : "Dress Color Suggestion",
//             paragraph :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique delectus impedit reiciendis et alias sint ipsum cumque numquam optio ea dignissimos id sapiente cupiditate, laboriosam praesentium, animi fuga enim harum.",
//             image :"https://images.edrawsoft.com/articles/wardrobe-designer/part1.png",
//             github : "",
//             deploy : ""
//         },
//         {
//             name : "Quiz App",
//             paragraph :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique delectus impedit reiciendis et alias sint ipsum cumque numquam optio ea dignissimos id sapiente cupiditate, laboriosam praesentium, animi fuga enim harum.",
//             image :"https://images.edrawsoft.com/articles/wardrobe-designer/part1.png",
//             github : "",
//             deploy : ""
//         },
//         {
//             name : "Weather App",
//             paragraph :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique delectus impedit reiciendis et alias sint ipsum cumque numquam optio ea dignissimos id sapiente cupiditate, laboriosam praesentium, animi fuga enim harum.",
//             image :"https://images.edrawsoft.com/articles/wardrobe-designer/part1.png",
//             github : "",
//             deploy : ""
//         }

//     ])

//     let [index,setIndex] = useState(0);
//     let current = data[index];
    
//     const handleIncrease =()=>{
//         if(index<data.length-1){
//             index +=1 ; 
//             setIndex(index)
//         }else{
//             setIndex(0)
//         }
//     }
//     const handleDecrease = ()=>{
//         if(index>0){
//             index -=1 ; 
//             setIndex(index)
//         }else{
//             setIndex(data.length-1)
//         }
//     }

//   return <>
//   <div className="project-page">
//   <h3 className='headings'>Projects</h3>
//     <div className='heading-span'>Most recent projects</div>
//     <div className="project-container">


//         <div className="project">
//             <div className='slide'>
//                  <FontAwesomeIcon onClick={()=>handleDecrease()}  icon={faChevronLeft} />
//             </div>
//             <div className="project-image">
//               <img src={current.image} alt="" />
//             </div>
//           <div className='project-content'>
//              <h2>{current.name}</h2>
//              <br />
//              <p>{current.paragraph}</p>

//              <div className='button-container'>
//                 <button>GitHub  &nbsp;<FontAwesomeIcon icon={faGithub} /></button>
//                 <button> Demo &nbsp; <FontAwesomeIcon icon={faSquareUpRight} /></button>
//             </div>
//           </div>
//             <div className='slide'>
//                  <FontAwesomeIcon onClick={()=>handleIncrease()} icon={faChevronRight} />
//             </div>
//         </div>

        
        
//     </div>
//   </div>

//   </>
// }

// export default Projects

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  let [data,setData] = useState([
    {
      image : "https://salesfokuz.com/uploads/1631691582302.png",
      name : "Order Management",
      content : "A dynamic E-commerce application built with HTML, CSS, JS, React, Node.js, and MongoDB. Features Role-Based Authentication for secure access control, showcasing proficiency in full-stack development.",
      gitHub : "https://github.com/SARANKUMARTSK/ORDER_MANAGEMENT_FE.git",
      view : "https://bright-swan-63b24a.netlify.app/landing-page"
    },
    {
      image : "https://lp.simplified.com/siteimages/design/limitless-fun.png",
      name : "Daily Dress Colour Suggestion For Women",
      content : "A personalized fashion application providing daily color recommendations for women's attire. Developed with HTML, CSS, JS, React, Node.js, and MongoDB, it offers a seamless user experience and highlights expertise in full-stack development.",
      gitHub : "https://github.com/SARANKUMARTSK/DAILY-DRESS-COLOR-SUGGESTION-FOR-WOMEN-FRONTEND.git",
      view : "https://legendary-froyo-b91394.netlify.app/landing-page"
    },
    // {
    //   image : "https://s3-alpha.figma.com/hub/file/3863763275/43bb9a44-3863-4ff2-ad24-a2de0a50d129-cover.png",
    //   name : "Weather App",
    //   content : "A user-friendly application built with HTML, CSS, and JavaScript, providing real-time weather updates. Seamlessly designed and developed, showcasing proficiency in frontend technologies and enhancing user experience.",
    //   gitHub : "",
    //   view : ""
    // },
    // {
    //   image : "https://repository-images.githubusercontent.com/404792705/ae07a5f4-fe09-4a1a-a5a0-74e229adca4a",
    //   name : "Quiz App",
    //   content : "An engaging application crafted with HTML, CSS, and JavaScript, offering interactive quizzes on various topics. Designed to enhance user engagement and test knowledge, demonstrating expertise in frontend development and user experience design.",
    //   gitHub : "",
    //   view : ""
    // }
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
          <button><a href={e.gitHub}>GitHub <FontAwesomeIcon icon={faGithub} /></a></button>
          <button><a href={e.view}>View <FontAwesomeIcon icon={faAnglesRight} /></a></button>
        </div>
      </div>
    </div>
    })
  }

  </div>
  </>
}

export default Projects