import React from 'react'
import "./Tools.css"

function Tools(props) {
    return (
        <div className='tools'>
            <h2>{props.heading}</h2>
            <hr />
            <p>{props.description}</p>
            <div className='tools-container'>
                {/* <div className='tools-container-col'>
            <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
            <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
            <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        */}
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
        <div className='tools-container-col'>
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
                <img className='toolsimg' src={require("../assets/googleAds.png")} alt='tools' />
        </div>
            </div>
        </div>
    )
}

export default Tools
