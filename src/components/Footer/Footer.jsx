import React from 'react'
import logo from "../../assets/images/Lanthanideas-Logo-Symbol.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-company-name-container">
            <p>Lanthanideas Ltd</p>
        </div>
        <div className="footer-company-logo-container">
            <img src={logo} />
        </div>
        <div className="footer-icon-attribution-container"> 
            <p>Icons made by <a href="https://www.frk.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
    </div>
  )
}

export default Footer