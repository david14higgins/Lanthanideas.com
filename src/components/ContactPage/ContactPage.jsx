import React from 'react'
import '../Page.css'
import './ContactPage.css'
import ContactForm from './ContactForm'


const ContactPage = () => {
  return (
    <div className="page contact-page">
        <div className="content contact-content">
            <h2>Contact</h2>
            <ContactForm />
        </div>
    </div>
        
  )
}

export default ContactPage