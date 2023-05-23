import React from 'react'
import "./LearningCard.css"

function LearningCard(props) {
  return (
    <div className='learningCard'>
      <h4>{props.heading}</h4>
        <img src={require("../assets/learning.jpg")} alt="learnerror" />

    </div>
  )
}

export default LearningCard
