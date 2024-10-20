import React from 'react';

const Footer = () => {
  // Function to scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Divider */}
      <hr className="dividder" />
      
      {/* Footer Section */}
      <div className="footer-section">
        {/* Top Part of the Footer */}
        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column">
              <a href="#home" className="contact-link">Home</a>
              <a href="#about" className="contact-link">About</a>
              <a href="#projects" className="contact-link">Projects</a>
              <a href="#contact" className="contact-link">Contact</a>
            </div>
            <div className="footer-column">
              <a href="https://instagram.com" target="_blank" className="contact-link">Instagram</a>
              <a href="https://twitter.com" target="_blank" className="contact-link">X (formerly Twitter)</a>
              <a href="https://upwork.com" target="_blank" className="contact-link">Upwork</a>
              <a href="https://linkedin.com" target="_blank" className="contact-link">LinkedIn</a>
            </div>
          </div>

          <div className="footer-contact">
            <a href="#contact" className="contact-link">CONTACT</a>
          </div>
        </div>

        {/* Bottom Part of the Footer */}
        <div className="footer-bottom">
          <div className="footer-left">
            <p>@dyrune2024</p>
          </div>

          <div className="footer-right">
            <div className="scroll-top">
              <a href="#top" className="scroll-arrow" onClick={handleScrollToTop}>
                ↑
              </a>
              <p>Scroll to top</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-sm mt-4">© 2024 My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
