import React from 'react'
import "./Header.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
    return (
        <>
        <nav className='navbar'>
            <div className='left'>
                <MenuIcon id="bar" onClick={handleClick}  />
                <img className='logo' src={require("../assets/logo.jpg")} alt="logo" />
                <div className="dropdown">
                    <button className="dropbtn dropbtn1">Program <KeyboardArrowDownIcon/></button>
                    <div className="dropdown-content ">
                        <h4>For Learners</h4>
                        <a href="/">Digital Marketing</a>
                        <a href="/">Free Live Mastercalss</a>
                        <a href="/">Find a Course</a>
                        <h4>For Companies</h4>
                        <a href="/">Customised Training</a>
                    </div>
                </div>
            </div>
            <div className='right'>
                
                <div className="dropdown">
                    <button className="dropbtn">About <KeyboardArrowDownIcon/></button>
                    <div className="dropdown-content">
                    <a href="/">About Us</a>
                        <a href="/">Student Life at IIDE</a>
                        <a href="/">Teachers & Mentors</a>
                        <a href="/">Testimonials</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Placements <KeyboardArrowDownIcon/></button>
                    <div className="dropdown-content">
                        <a href="/">Our Recruiters</a>
                        <a href="/">Placement Report</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <a href='/'>Hire from Us</a>
                <a href='/'>Work with Us</a>
                <div className="dropdown">
                    <button className="dropbtn">Knowledge Portal <KeyboardArrowDownIcon/></button>
                    <div className="dropdown-content">
                        <a href="/">Blogs</a>
                        <a href="/">Case Studies</a>
                        <a href="/">Presentations</a>
                    </div>
                </div>
                <a href='/'>Contact Us</a>
            </div>
        </nav>
        <div className='sidebar' id={isActive ? 'active' : ''}  >
        <h4>About</h4>
            <ul>
                <li>About Us</li>
                <li>Student Life at IIDE</li>
                <li>Teachers & Mentors</li>
                <li>Testimonials</li>
            </ul>
        <h4>Knowledge Portal</h4>
            <ul>
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Presentations</li>
            </ul>
        <h4>Work with Us</h4>
        <h4>Contact Us</h4>
        </div>
        </>
    )
}

export default Header
