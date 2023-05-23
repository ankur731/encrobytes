import React from 'react'
import "./Learning.css"
import LearningCard from './LearningCard'

function Learning() {
  return (
    <div className='learning'>
      <h2>Learning Methodology</h2>
      <hr />
      <div className='learningCards'>
      <LearningCard heading="Start with Video Lectures:"/>
      <LearningCard heading="Start with Video Lectures:"/>
      <LearningCard heading="Start with Video Lectures:"/>
      <LearningCard heading="Start with Video Lectures:"/>
      </div>
    </div>
  )
}

export default Learning
