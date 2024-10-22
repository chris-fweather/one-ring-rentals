import React from 'react';
import './ContactForm.css';  

/**
 * ContactUs component renders a contact page with company contact details
 * and a form that allows users to send a message.
 * 
 * @returns {JSX.Element} - The rendered contact page and form
 */
const ContactUs = () => (
  <>
    <div className="contact-page">
      <h2>Contact Us</h2>

      {/* Company contact details */}
      <div className="contact-details">
        <p><strong>Email:</strong> contact@oneringrentals.com</p>
        <p><strong>Phone:</strong> +1 123 456 7890</p>
      </div>

      {/* Contact form for user to fill out */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>

        {/* Submit button to send the message */}
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  </>
);

export default ContactUs;
