import React from 'react'
import "./Mentors.css"
import MentorCard from './MentorCard'

function Mentors(props) {
  return (
    <div className='mentors'>
          <h2>{props.heading}</h2>
      <hr/>
      <p>{props.description}</p>
      <div className='mentorsCards'>
          <MentorCard name="Rishab Seth" experience="8" />
          <MentorCard name="Rishab Seth" experience="8" />
          <MentorCard name="Rishab Seth" experience="8" />
          <MentorCard name="Rishab Seth" experience="8" />
      </div>
      {/* <Brochure /> */}
    </div>
  )
}

export default Mentors
