import React from 'react'
import profilePicture from "../../assets/images/Profile-Picture.jpeg"
import './LandingPage.css'
import BackgroundLogo from '../Background/BackgroundLogo'

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className="landing-content">
            <h1>Welcome to Lanthanideas</h1>
            <h2>By Ian Higgins, <span className="coral-highlight">Consultant</span> to the Rare Earth Industry</h2>
            <div className="landing-pic-container"> 
                <img src={profilePicture}/>
            </div>
            <div className="learn-more-btn-container">
                <a href="#about-page">Learn More</a>
            </div>
        </div>  
        <BackgroundLogo position="upper"/>
        <BackgroundLogo position="lower"/>
    </div>
  )
}

export default LandingPage