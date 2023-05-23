import React from 'react'
import "./Projects.css"
import ProjectCard from './ProjectCard'

function Projects(props) {
  return (
    <div className='projects'>
      <h2>{props.heading}</h2>
      <hr />
      <p>{props.description}</p>
      <div className='projectCards'>
        <ProjectCard name="Starbucks" description="Optimize the 'My Starbucks Reward' program to further boost customer loyalty. Decide on key user actions which would trigger reward points & emailers. Also share subject lines, content and layouts for these emailers."/>
        <ProjectCard name="OYO Rooms" description="Calculate the engagement rate received by OYO on key social media platforms for the last month. Suggest a content calendar across relevant social platforms for the next 15 days to increase their engagement rate by at least 30%."/>
        <ProjectCard name="Dominos" description="Identify Dominos’ core target audience and design 2 buyer personas. Imagine consumer journeys for these personas which include relevant digital marketing touch points such as Social Media, SEO, Email Marketing, etc."/>
        <ProjectCard name="L'Oreal Paris" description="During the Covid lockdown, 80% of users either coloured or wished to colour their hair while stuck indoors. Audit how this user behaviour translated into search patterns on Google. Suggest a relevant SEO strategy to capitalize on this insight."/>
      </div>
    </div>
  )
}

export default Projects
