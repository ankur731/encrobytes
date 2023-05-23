import React from 'react'
import "./Form.css"
import DoneIcon from '@mui/icons-material/Done';

function Form() {
  return (
    <div className='formContainer'>
      <div className='formBox '> 
        <div className='formBoxLeft'>
            <div className='formBoxLeftTop'>
                <h2>₹1,15,000</h2>
                <h2>May 31, 2023</h2>
            </div>
            <div className='formBoxLeftBottom'>
                <h4>What's Included</h4>
                <h5>Features/Benefits</h5>
                <p><DoneIcon /> Become an Industry-Certified Digital Marketer</p>
                <p><DoneIcon />  1:1 Mentoring Session with Trainers</p>
                <p><DoneIcon /> Syllabus curated by Real World Experts</p>
                <p><DoneIcon /> 250+ Hiring Partners such as Nykaa, Zomato, Kinnect</p>
                <p><DoneIcon /> Craft a Winning Resume with Customised Feedback</p>
                <p><DoneIcon /> Interview Preparation with Hiring Expert</p>
                <p><DoneIcon /> Master 20+ Core Digital Marketing Tools</p>
                <p><DoneIcon /> No Prior Experience/Knowledge required</p>
            </div>
        </div>
        <div className='formBoxRight'>
            <h1>I’m Interested in This Programme</h1>
            <h4>Scholarship Deadline : May 26, 2023</h4>
            <div className='form'>
            <form action='/' method='get' className='realForm'>
                <input type='text' name='name' required placeholder='First Name*'/>
                <input type='text' name='name'  required placeholder='Last Name*'/>
                <input type='text' name='number'  required placeholder='Mobile*'/>
                <input type='text' name='email'  required placeholder='Email*'/>
            </form>
            <p> I agree to IIDE's Terms and Conditions and their Privacy Policy</p>
                <button className='submitbtn' type='submit'>Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
