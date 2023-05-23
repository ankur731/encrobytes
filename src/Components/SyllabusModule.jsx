import React, { useState } from 'react'
import "./SyllabusModule.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SyllabusModule(props) {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div className='syllabusModule'>
        <h2>{props.term}</h2>
        <p> {props.termContent}</p>
          <div className='syllabusModuleHeading' onClick={toggle}>Modules Covered : <KeyboardArrowDownIcon/></div>
          {open && (
            <div className="toggle">
              <ul>
                <li>Introduction to Digital Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Key Performance Marketing Jargon</li>
                <li>Search Engine Marketing</li>
                <li>Campaign Planning</li>
                <li>Presentation Making</li>
                <li>Ecommerce</li>
              </ul>
              <h5><span>Live Project: </span>Search Marketing</h5>
            </div>
          )}
        </div>
    )
}

export default SyllabusModule
