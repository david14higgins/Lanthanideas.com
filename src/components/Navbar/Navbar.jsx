import React, { useState } from 'react'
import logo from "../../assets/images/Lanthanideas-Logo.png"
import "./Navbar.css"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    const hideMenu = () => {
        setShowMenu(false)
    }

  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="toggle-button" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <div className={`navbar-links ${showMenu ? "active" : ""}`}>
            <ul>
                <li id="home-link"><a href="#landing-page" onClick={hideMenu}>Home</a></li>
                <li id="about-link"><a href="#about-page" onClick={hideMenu}>About</a></li>
                <li id="rare-earth-link"><a href="#rare-earths-page" onClick={hideMenu}>Rare Earths</a></li>
                <li id="service-link"><a href="#services-page" onClick={hideMenu}>Services</a></li>
                <li id="collaborations-link"><a href="#collaborations-page" onClick={hideMenu}>Collaborations</a></li>
                <li id="contact-link"><a href="#contact-page" onClick={hideMenu}>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar