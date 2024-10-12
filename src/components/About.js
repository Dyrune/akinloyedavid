
import React, { useEffect, useState } from "react";

const About = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state

  // Trigger visibility when component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay before starting the animations

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="containerr">
      {/* Left section with full-height image */}
      <div className="left">
        <img 
          src="https://images.pexels.com/photos/27638171/pexels-photo-27638171/free-photo-of-bedroom-in-cabin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About us"
        />
      </div>

      {/* Center horizontal line */}
      <div className="hr-container">
        <hr className="breathing-hr" />
      </div>

      {/* Right section with centered content */}
      <div className="right">
        {/* Corrected dynamic class usage */}
        <div className={`content ${isVisible ? "content-visible" : ""}`}>
          <h1>About Me</h1>
          <p className={`slide-in ${isVisible ? "slide-in-visible" : ""}`}>
            We are a company that specializes in delivering high-quality services and more than you expect, come to me and i will give you the unexpected...
          </p>
          <button className={`discover-btn ${isVisible ? "fade-in" : ""}`} onClick={openModal}>
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 