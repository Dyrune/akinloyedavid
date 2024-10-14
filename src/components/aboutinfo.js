import React, { useEffect } from 'react';

const Modal = ({ onClose }) => {
  useEffect(() => {
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(false);
    }
    return () => {
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <header className="modal-header2">
          <div className="header-left">
            <span className="logo">0tnda</span>
            <div className="contactt">
              <a href="/contact">Let's work together</a>
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
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Architect" className="architect-image" />
            </div>
            <div className="info-column">
              <h3>Akinloye T. David</h3>
              <p>
              "Architecture contributes to nature and to society. We try to bring nature back into the city, protect the environment, and form a connection between humans and nature." 
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
    {/* Header Statement */}
    <div className="process-header">
      <p>Our streamlined process and unwavering dedication to excellence ensure that your project exceeds expectations, leaving a lasting impression on your audience.</p>
    </div>

    {/* Process Steps */}
    <div className="process-row">
      <div className="process-number">1</div>
      <div className="process-step">
        <h1>Initial Consultation</h1>
        <p>We begin with a detailed consultation to understand your project's unique goals and requirements. We begin with a  your project's unique goals and requirements</p>
      </div>
    </div>

    <div className="process-row">
      <div className="process-number">2</div>
      <div className="process-step">
        <h1>Design & Development</h1>
        <p> We begin with a detailed consultation to understand your project's unique goals and requirements Our team works closely with you to develop a design that reflects your vision and meets your needs.</p>
      </div>
    </div>

    <div className="process-row">
      <div className="process-number">3</div>
      <div className="process-step">
        <h1>Implementation</h1>
        <p> We begin with a detailed consultation to understand your project's unique Once the design is approved, we move on to the implementation phase, ensuring every detail is perfect.</p>
      </div>
    </div>

    <div className="process-row">
      <div className="process-number">4</div>
      <div className="process-step">
        <h1>Final Delivery</h1>
        <p>After rigorous testing We begin with a detailed consultation to understand your project's unique goals and requirements  we deliver the final product, exceeding your expectations.</p>
      </div>
    </div>
  </div>
</div>

          {/* Divider */}
          <hr className="divider" />


<div className="process-section1">
  <div className="process-label1">
    <h4>My services</h4>
  </div>
  
  <div className="process-content1">

    {/* Process Steps */}
    <div className="process-steps1">
      <div className="process-row1">
        <div className="process-number1">1</div>
        <div className="process-detail1">
          <h5>Initial Consultation</h5>
          <p>We begin with a detailed consultation to understand your project's unique goals and requirements.</p>
        </div>
      </div>

      <div className="process-row1">
        <div className="process-number1">2</div>
        <div className="process-detail1">
          <h5>Design & Development</h5>
          <p>Our team works closely with you to develop a design that reflects your vision and meets your needs.</p>
        </div>
      </div>

      <div className="process-row1">
        <div className="process-number1">3</div>
        <div className="process-detail1">
          <h5>Implementation</h5>
          <p>Once the design is approved, we move on to the implementation phase, ensuring every detail is perfect.</p>
        </div>
      </div>

      <div className="process-row1">
        <div className="process-number1">4</div>
        <div className="process-detail1      ">
          <h5>Final Delivery</h5>
          <p>After rigorous testing and adjustments, we deliver the final product, exceeding your expectations.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Divider */}
<hr className="dividder" />

{/* Footer Section */}
<div className="footer-section">
  {/* Top Part of the Footer */}
  <div className="footer-top">
    {/* Left Side Links */}
    <div className="footer-links">
      <div className="footer-column">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className="footer-column">
        <p>Instagram</p>
        <p>X (formerly Twitter)</p>
        <p>Upwork</p>
        <p>LinkedIn</p>
      </div>
    </div>

    {/* Right Side Contact Link */}
    <div className="footer-contact">
      <a href="#contact" className="contact-link">CONTACT</a>
    </div>
  </div>

  {/* Bottom Part of the Footer */}
  <div className="footer-bottom">
    {/* Left Side */}
    <div className="footer-left">
      <p>@dyrune2024</p>
    </div>

    {/* Right Side with Scroll to Top Arrow */}
    <div className="footer-right">
      <div className="scroll-top">
        <a href="#top" className="scroll-arrow">↑</a>
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
