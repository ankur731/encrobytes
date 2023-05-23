import React from 'react'
import "./FAQContainer.css";
import FAQ from './FAQ';

function FAQContainer() {
  return (
    <div className='faqContainer'>
    <h2>Frequently Asked Questions</h2>
    <hr />
    <p className='alert'>Program Commences : May 31, 2023</p>
    <p>Here are some of the most popular queries on Online Digital Marketing Course.</p>
      <FAQ ques="Can I learn digital marketing online?" ans="Yes, digital marketing can be studied in any format including online, but a hybrid course will help you apply your learnings practically. IIDE's Online Digital Marketing Course follows a hybrid format which consists of comprehensive online lectures, live sessions, one-on-one mentoring, and even includes in-class presentations to be presented offline."/>
      <FAQ ques=" Is a digital marketing certificate worth it?" ans="Yes, a certificate in digital marketing from institutes like IIDE is worth it because it will help you add value to your CV and it also serves as a testament to your knowledge received during the course."/>
      <FAQ ques=" Is digital marketing a good career?" ans="As per statistics, the digital marketing industry is expected to grow substantially. Subsequently, a career in digital marketing promises high-paying salary packages and placement opportunities across the globe. Hence, a digital marketing career would be highly beneficial."/>
      <FAQ ques="What is the eligibility criteria for IIDE's Online Digital Marketing Course?" ans="The eligibility criteria is 12th Grade Pass (10+2) with a minimum of 50% marks in aggregate or equivalent. However, any individual who is 16 years and above can also apply for the program. Students, freelancers, startup owners as well as working professionals looking to upgrade their skills can benefit from this course. To know more, get in touch with our counselors."/>
      <FAQ ques=" What is the salary package one can expect after completion of the course?" ans="The salary package after completion of the course depends on the experience of the candidate.
- If you are a student, you can expect a stipend between 5k and 15k.
- If you are a fresh graduate, then you can expect a salary between 2.5L and 3.5L per annum.
- If you are a working professional you can expect a 20-30% hike on your CTC.
For more information, click here ."/>
<button className='showmore'>Show More</button>
    </div>
  )
}

export default FAQContainer
