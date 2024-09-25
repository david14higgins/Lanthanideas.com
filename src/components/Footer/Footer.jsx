import React from 'react'
import logo from "../../assets/images/Lanthanideas-Logo-Symbol.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-text-container left-container">
            <p>Website by <a href="https://www.linkedin.com/in/david14higgins/" target="_blank">David Higgins</a></p>
        </div>
        <div className="footer-company-logo-container">
            <img src={logo} />
        </div>
        <div className="footer-text-container right-container"> 
            <p>Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
    </div>
  )
}

export default Footer