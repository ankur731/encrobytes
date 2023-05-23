import React from 'react'
import "./Certificates.css"

function Certificates() {
  return (
    <div className='certificates'>
      <div className='col1'>
        <h2>Industry Recognized Certification from IIDE</h2>
        <hr />
        <p>By the end of your online digital marketing training, you will recieve a certificate of completion from IIDE. This digital marketing certificate will earn you recognition from top marketing agencies & brands. Additionally, you will be able to crack the Google Ad Fundamental Certification.</p>
      </div>
      <div className='col2'>
            <img src={require("../assets/certificate.jpg")} alt="certerror" />
            <img src={require("../assets/certificate.jpg")} alt="certerror" />
      </div>
    </div>
  )
}

export default Certificates
