import React from 'react'
import "./FAQ.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function FAQ(props) {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
  return (
    <div className='faq'>
          <div className='faqHeading' onClick={toggle}>Q {props.ques} <KeyboardArrowDownIcon/></div>
          {open && (
            <div className="faqtoggle">
             <p>{props.ans}</p>
            </div>
          )}
    </div>
  )
}

export default FAQ
