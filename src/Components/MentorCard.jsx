import React from 'react'
import "./MentorCard.css"

function MentorCard(props) {
  return (
    <div className='mentorcard'>
        <img className='profileImg' src={require("../assets/person.jpg")} alt='' />
       

      <h2>{props.name}</h2>
      <h3>Worked for</h3>
      <img className='workedforlogo' src={require("../assets/google.png")} alt="profilecardlogo"/>
      <p>{props.experience} years of experience</p>
    </div>
  )
}

export default MentorCard
