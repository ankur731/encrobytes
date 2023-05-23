import React from 'react'
import "./ReviewCard.css"

function ReviewCard() {
  return (
    <div className='reviewCard'>
      <div className='row'> 
        <img src={require("../assets/person.jpg")} alt='person' />
        <div className='col'>
            <h3>Pallavi Jain</h3>
            <h5>Brand solution</h5>
            <img className='company' src={require("../assets/google.png")} alt="error" />
        </div>
      </div>
      <div className='row'> 
      <p>“I have always been averse to technical topics, but trainers at IIDE make even the toughest topic an easy learning experience! Never have I had so much fun while learning. The live projects made the course interesting. To anyone looking out in the direction of pursuing digital marketing, IIDE is your go-to place!”</p>
      </div>
    </div>
  )
}

export default ReviewCard
