import React, { useState } from 'react'
import logo from "../../assets/images/Lanthanideas-Logo.png"
import "./Navbar.css"
import { Link } from "react-scroll"

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
            <Link to="landing-page" smooth={true} duration={1000} onClick={hideMenu}>
                <img src={logo}/>
            </Link>
        </div>
        <div className="toggle-button" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <div className={`navbar-links ${showMenu ? "active" : ""}`}>
            <ul>
                <li id="home-link"><Link to="landing-page" smooth={true} duration={1000} onClick={hideMenu}>Home</Link></li>
                <li id="about-link"><Link to="about-page" smooth={true} duration={1000} onClick={hideMenu}>About</Link></li>
                <li id="rare-earth-link"><Link to="rare-earths-page" smooth={true} duration={1000} onClick={hideMenu}>Rare Earths</Link></li>
                <li id="service-link"><Link to="services-page" smooth={true} duration={1000} onClick={hideMenu}>Services</Link></li>
                <li id="collaborations-link"><Link to="collaborations-page" smooth={true} duration={1000} onClick={hideMenu}>Collaborations</Link></li>
                <li id="contact-link"><Link to="contact-page" smooth={true} duration={1000} onClick={hideMenu}>Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar