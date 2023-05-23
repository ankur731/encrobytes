import React from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {
  return (
    <div className='projectCard'>
      <img src={require("../assets/dominos.jpg")} alt="domi" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard
