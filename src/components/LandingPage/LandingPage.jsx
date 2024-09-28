import React from 'react'
import './LandingPage.css'
import BackgroundLogo from '../Background/BackgroundLogo'
import { Element, Link } from "react-scroll";

const LandingPage = () => {
  return (
    <Element name="langing-page">
      <div id="landing-page">
          <div className="landing-content"> 
              <h1>Welcome to Lanthanideas</h1>
              <h2><span className="highlight">Consultancy</span> to the Rare Earth Industry</h2>
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