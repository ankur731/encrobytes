import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Corporate Training</p>
            <p>Conatct Us</p>
            <p>Refer & Earn</p>
        </div>
        <div className='col'>
            <h3>Career</h3>
            <p>Hire from Us</p>
            <p>Teach at IIDE</p>
            <p>Work with Us</p>
        </div>
        <div className='col'>
            <h3>Resources</h3>
            <p>Bologs</p>
            <p>Presentations</p>
            <p>CAse Studies</p>
        </div>
        <div className='col'>
            <h3>Approved By</h3>
            <img src={require("../assets/nsdc.jpg")} alt='nsdc' />
        </div>
        <div className='col'>
            <h3>Google Partner</h3>
            <img src={require("../assets/google.png")} alt='goo' />
        </div>
      </div>
      <div className='row row2'>
        <h3>Digital Marketing Programmes</h3>
        <p>Post Graduation in Digital Marketing (11 months) | Online Digital Marketing Course (4 months)</p>
      </div>
      <div className='row row2'>
        <h3>Short Term Certifications</h3>
        <p>All Digital Marketing Certifications | Facebook Ads Course | SEO Course Online| Social Media Marketing Course Online | Learn Google Analytics Course Online | Online WordPress Course | Ad Designing Course | Online Reputation Management Course | Copywriting Course Online | Email Marketing Course Online | Online Ecommerce Course | Media Planning Course | Content Marketing Course Online | Online CRO Course</p>
      </div>
      <div className='row row2'>
        <h3>Digital Marketing Courses Across The World</h3>
        <p>Digital Marketing Courses in Mumbai | Navi Mumbai | Andheri | Mulund | Vashi | Thane | Churchgate | Delhi | Noida | Hyderabad | Gurgaon | Udaipur | Surat | Pune | Patna | Nagpur | Lucknow | Kolkata | Jaipur | Indore | Chandigarh | Ahmedabad | Nigeria | Dubai | Abu Dhabi | Egypt | Nepal | Malaysia | Sri Lanka</p>
      </div>
      <hr />
      <div className='row'>
       <p> &#169 Copyright 2023 IIDE</p>
       <p>Terms & conditions</p>
       <p>Privacy policy</p>
       <p>Sitemap</p>
      </div>
    </div>
  )
}

export default Footer
