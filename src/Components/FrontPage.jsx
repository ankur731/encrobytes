import React from 'react'
import "./FrontPage.css"

function FrontPage() {
  return (<>
    <div className='frontpage'>
        <div className='frontpageContent'>
            <h1>Online Digital Marketing Course with Certificate & Placements</h1>
            <h5>India best Online Digital Marketing Course taught by industry experts in a comprehensive and question-oriented format.</h5>
            <h4>100% Job Assistance | Video Lectures + Live Online Sessions</h4>
            <h4>Scholarship Deadline : May 26, 2023</h4>
            <button>Download Brochure</button>
            <div className='bottomLogos'>
                <div>
                    <h6>Certificate in Alignment with</h6>
                    <img className='bottomLogo' src={require("../assets/google.png")} alt='google' />
                </div>
                <div>
                <h6>Approved by</h6>
                <img className='bottomLogo'  src={require("../assets/nsdc.jpg")} alt='nsdc' />
                </div>
            </div>
        </div>
        <div className='frontpageImage'>
            <img className='frontpageRightImage' src={require("../assets/frontpageImage.png")} alt='imageerror'/>
        </div>
        </div>
        <div className='bottombar'>
        <div className='statsbar'>
            <div className='stats'>
                <h3>1,00,000+</h3>
                <p>Student Trained</p>
            </div>
            <div className='stats'>
            <h3>100%</h3>
                <p>Placement Assistance</p>
            </div>
            <div className='stats'>
            <h3>May 31, 2023</h3>
                <p>Start Date</p>
            </div>
            <div className='stats'>
            <h3>7:00 PM - 9:00 PM </h3>
                <p>Lecture Timing (IST)</p>
            </div>
            <div className='stats'>
            <h3>0%</h3>
                <p>EMI Available</p>
            </div>
        </div>
      

      </div>
    
    </>
  )
}

export default FrontPage
