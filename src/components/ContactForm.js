import React, { useState } from 'react';
import { gsap } from 'gsap';

const ContactForm = ({ isVisible, closeForm }) => {
  return (
    <div className={`contact-form-container ${isVisible ? 'show' : ''}`}>
      <div className="contact-form">
        <button className="close-button" onClick={closeForm}>X</button>
        <h2>Contact Me</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
