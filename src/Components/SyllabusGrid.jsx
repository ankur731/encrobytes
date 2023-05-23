import React from 'react'
import "./SyllabusGrid.css"

function SyllabusGrid() {
    return (
        <div className='syllabusGrid'>
            <div >
                <div className="grid-item">
                    <h1>100+</h1>
                    <h4>HOURS OF LIVE LEARNING</h4>
                </div>
                <div className="grid-item">
                    <h1>50+</h1>
                    <h4>HOURS OF VIDEO LEARNING</h4>
                </div>
            </div>
            <div >
            <div className="grid-item">
                    <h1>7+</h1>
                    <h4>BRANDS PROJECTS</h4>
                </div>
                <div className="grid-item">
                    <button className='downloadButton'>Get Syllabus</button>
                </div>
            </div>

        </div>
    )
}

export default SyllabusGrid
