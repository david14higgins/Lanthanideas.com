import React from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2'

const ContactForm = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "936fdd5e-1c40-4a19-a99b-2cf0f75a1944");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully",
            icon: "success"
          })
        }
    };


    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h3>Contact Form</h3>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" requried />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email address" name="email" requried />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field message" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
  )
}

export default ContactForm