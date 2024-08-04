import React from 'react'
import '../Page.css'
import './ContactPage.css'
import ContactForm from './ContactForm'
import BackgroundLogo from '../Background/BackgroundLogo'


const ContactPage = () => {
  return (
    <div className="page contact-page">
        <div className="content contact-content">
            <h2>Contact</h2>
            <ContactForm />
        </div>
        <BackgroundLogo position="upper"/>
        <BackgroundLogo position="lower"/>
    </div>
        
  )
}

export default ContactPage