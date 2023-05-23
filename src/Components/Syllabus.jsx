import React from 'react'
import "./Syllabus.css";
import SyllabusModule from './SyllabusModule';
import SyllabusGrid from './SyllabusGrid';

function Syllabus() {
  return (
    <div className='syllabus'>
      <h2>Online Digital Marketing Course Syllabus</h2>
      <hr/>
      <h4>Our hybrid digital marketing course is designed to teach students the basics to the advanced level concepts of digital marketing with practice assignments and offline in-class projects.</h4>
      <div className='syllabusContent'>
            <div className='syllabusContentLeft'>
                <SyllabusModule term="Term1" termContent="In this term, you will learn how to ace search marketing, campaign planning and ecommerce."/>
                <SyllabusModule term="Term2" termContent="After mastering Term 1, you will progress to ace social media marketing and content strategy."/>
                <SyllabusModule term="Term3" termContent="In this last term, you will learn ads, analytics and present an in-class final project to the jury."/>
            </div>
            <div className='syllabusContentRight'>
                <SyllabusGrid />
            </div>
      </div>
    </div>
  )
}

export default Syllabus
