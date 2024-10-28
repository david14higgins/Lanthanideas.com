import React, { useState } from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2'
import RightArrow from "../../assets/images/Arrow-Right-Icon.png"

const ContactForm = () => {
    //Form state 
    const [formDataState, setFormDataState] = useState({
      name: "",
      email: "", 
      message: ""
    })

    // Handle input change
    const onChange = (event) => {
      const { name, value } = event.target;
      setFormDataState({
        ...formDataState,
        [name]: value
      });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "eced2319-16af-4c46-8a9c-594a170939ad");
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

          //Reset form state data 
          setFormDataState({
            name: "",
            email: "",
            message: ""
          })
        }
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-title">
                  <h3>Get in touch</h3>
                  <hr/>
              </div>
              <input type="text" name="name" placeholder="Your Name" className="contact-inputs" value={formDataState.name} onChange={onChange}  required/>
              <input type="email" name="email" placeholder="Your Email" className="contact-inputs" value={formDataState.email} onChange={onChange} required/>
              <textarea name="message" placeholder="Your Message" className="contact-inputs" value={formDataState.message} onChange={onChange} required></textarea>
              <button type="submit">Submit<img src={RightArrow}/></button>
            </form>
        </div>
  )
}

export default ContactForm