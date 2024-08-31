import React from 'react'
import profilePicture from "../../assets/images/Profile-Picture.jpeg"
import './LandingPage.css'
import BackgroundLogo from '../Background/BackgroundLogo'
import { Element, Link } from "react-scroll";

const LandingPage = () => {
  return (
    <Element name="langing-page">
      <div id="landing-page">
          <div className="landing-content">
              <h1>Welcome to Lanthanideas</h1>
              <h2>By Ian Higgins, <span className="coral-highlight">Consultant</span> to the Rare Earth Industry</h2>
              <div className="landing-pic-container"> 
                  <img src={profilePicture}/>
              </div>
              <div className="learn-more-btn-container">
                <Link to="about-page" smooth={true} duration={1000}>Learn More</Link>
              </div>
          </div>  
          <BackgroundLogo position="upper"/>
          <BackgroundLogo position="lower"/>
      </div>
    </Element>
  )
}

export default LandingPage