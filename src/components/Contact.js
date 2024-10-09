import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'; // Import icons including phone

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-column">
        <h1>SAY HELLO</h1>
        <p>I am from Lagos, Nigeria</p>
      </div>

      <div className="contact-column2">
        <p>Akinloye T. David</p>
        <p>
          <a href="mailto:dan@mafcohouse.com">
            <FaEnvelope /> dan@mafcohouse.com
          </a>
        </p>
        <p>
          <a href="tel:+14169850597">
            <FaPhone /> +234 816 4585 597
          </a>
        </p>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> X (formerly Twitter)
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
