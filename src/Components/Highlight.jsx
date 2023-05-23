import React from 'react'
import "./Highlight.css"
import DoneIcon from '@mui/icons-material/Done';

function Highlight() {
  return (
    <div className='highlights'>
    <h2>Key Highlights of the Course</h2>
    <hr />
    <div className='row'>
      <div className='col col1'>
            <ul>
                <li><DoneIcon color="primary"/> Become an Industry-Certified Digital Marketer</li>
                <li><DoneIcon color="primary"/> 1:1 Mentoring Session with Trainers</li>
                <li><DoneIcon color="primary"/> Syllabus curated by Real World Experts</li>
                <li><DoneIcon color="primary"/> 250+ Hiring Partners such as Nykaa, Zomato, Kinnect</li>
            </ul>
      </div>
      <div className=' col col2'>
            <ul>
                <li><DoneIcon color="primary"/> Craft a Winning Resume with Customised Feedback</li>
                <li><DoneIcon color="primary"/> Interview Preparation with Hiring Expert</li>
                <li><DoneIcon color="primary"/> Master 20+ Core Digital Marketing Tools</li>
                <li><DoneIcon color="primary"/> No Prior Experience/Knowledge required</li>
            </ul>
      </div>
      <div className='highlightCard col col3'>
                <h3>Get familiar with our online digital marketing course syllabus.</h3>
                <button className='downloadButton'>Download Brochure</button>
      </div>
    </div>
    </div>
  )
}

export default Highlight
