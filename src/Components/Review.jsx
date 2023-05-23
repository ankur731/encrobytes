import React from 'react'
import "./Review.css"
import ReviewCard from './ReviewCard'

function Review() {
  return (
    <div className='review'>
    <h2>IIDE Student Reviews</h2>
    <hr />
    <div className='reviewCards'>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
    </div>
  )
}

export default Review
