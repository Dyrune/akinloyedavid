import React, { useEffect, useRef } from 'react';

const Modal = ({ onClose }) => {
  const modalRef = useRef(null); // Create a reference for the modal element

  useEffect(() => {
    // Disable scrolling when the modal is open using fullpage.js if it's present
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(false);
    }

    // Re-enable scrolling when the modal is closed
    return () => {
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Scroll the modal content to the top
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    } else {
      console.error('Modal element not found!');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <div id="top"></div>
        <header className="modal-header3">
          <div className="header-left">
            <span className="logo">0tnda</span>
            <div className="contactt">
              <a href="/contact">
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.3 9.29 1.42 1.42 9.29-9.3V10h2V3z" />
                  <path d="M5 5v14h14v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5z" />
                </svg>
              </a>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </header>

        {/* Body Content */}
        <div className="modal-body">
          {/* Architect Information Section */}
          <div className="architect-info">
            <div className="image-column">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Architect"
                className="architect-image"
              />
            </div>
            <div className="info-column">
              <h3>Akinloye T. David</h3>
              <p>
                "Architecture contributes to nature and to society. We try to bring nature back into the city, protect
                the environment, and form a connection between humans and nature."
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="divider" />

          {/* Education Section */}
          <div className="education-section">
            <div className="education-label">
              <h4>Education</h4>
            </div>
            <div className="education-content">
              <div className="education-row">
                <div className="degree">Master of Architecture</div>
                <div className="school">
                  <a href="https://www.califonireuniversity.com" target="_blank" rel="noopener noreferrer">
                    Califonire University
                  </a>
                </div>
                <div className="year year-highlight">2045 - 1955</div>
              </div>

              <div className="education-row">
                <div className="degree">Secondary school</div>
                <div className="school">
                  <a href="https://www.damascusteduniversity.edu" target="_blank" rel="noopener noreferrer">
                    Damascusted University
                  </a>
                </div>
                <div className="year year-highlight">3493 - 2024</div>
              </div>

              <div className="education-row">
                <div className="degree">Barchelow in Masters</div>
                <div className="school">
                  <a href="https://www.jupiteruniversity.edu" target="_blank" rel="noopener noreferrer">
                    Jupiter University
                  </a>
                </div>
                <div className="year year-highlight">2020 - 1738</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="divider" />

          {/* Process Section */}
          <div className="process-section">
            <div className="process-label">
              <h4>PROCESS</h4>
            </div>
            <div className="process-content">
              <div className="process-row">
                <div className="process-number">1</div>
                <div className="process-step">
                  <h1>Initial Consultation</h1>
                  <p>We begin with a detailed consultation to understand your project's unique goals and requirements.</p>
                </div>
              </div>

              <div className="process-row">
                <div className="process-number">2</div>
                <div className="process-step">
                  <h1>Design & Development</h1>
                  <p>
                    Our team works closely with you to develop a design that reflects your vision and meets your needs.
                  </p>
                </div>
              </div>

              <div className="process-row">
                <div className="process-number">3</div>
                <div className="process-step">
                  <h1>Implementation</h1>
                  <p>
                    Once the design is approved, we move on to the implementation phase, ensuring every detail is
                    perfect.
                  </p>
                </div>
              </div>

              <div className="process-row">
                <div className="process-number">4</div>
                <div className="process-step">
                  <h1>Final Delivery</h1>
                  <p>
                    After rigorous testing and adjustments, we deliver the final product, exceeding your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="divider" />

          {/* Footer Section */}
          <div className="footer-section">
            {/* Top Part of the Footer */}
            <div className="footer-top">
              {/* Left Side Links */}
              <div className="footer-links">
                <div className="footer-column">
                  <a href="#home" className="contact-link">
                    Home
                  </a>
                  <a href="#about" className="contact-link">
                    About
                  </a>
                  <a href="#projects" className="contact-link">
                    Projects
                  </a>
                  <a href="#contact" className="contact-link">
                    Contact
                  </a>
                </div>
                <div className="footer-column">
                  <a href="https://instagram.com" target="_blank" className="contact-link">
                    Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" className="contact-link">
                    X (formerly Twitter)
                  </a>
                  <a href="https://upwork.com" target="_blank" className="contact-link">
                    Upwork
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="contact-link">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right Side Contact Link */}
              <div className="footer-contact">
                <a href="#contact" className="contact-link">
                  CONTACT
                </a>
              </div>
            </div>

            {/* Bottom Part of the Footer */}
            <div className="footer-bottom">
              {/* Left Side */}
              <div className="footer-left">
                <p>@dyrune2024</p>
              </div>

              {/* Scroll to Top Link */}
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
