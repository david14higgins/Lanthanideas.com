import React, { useState } from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2'
import RightArrow from "../../assets/images/Arrow-Right-Icon.png"

const ContactForm = () => {
    //Form state 
    // const [formData, setFormData] = useState({
    //   name: "",
    //   email: "", 
    //   message: ""
    // })

    // const handleInputChange = (event) => {
    //   const {name, value} = event.target; 
    //   setFormData({
    //     ...formData, 
    //     [name] : value
    //   })
    // };

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

          //Reset form data 
          // setFormData({
          //   name: "",
          //   email: "",
          //   message: ""
          // })
        }
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-title">
                  <h3>Get in touch</h3>
                  <hr/>
              </div>
              <input type="text" name="name" placeholder="Your Name" className="contact-inputs"  required/>
              <input type="email" name="email" placeholder="Your Email" className="contact-inputs"  required/>
              <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
              <button type="submit">Submit <img src={RightArrow}/></button>
            </form>
        </div>
  )
}

export default ContactForm