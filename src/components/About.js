import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css"; // Import animate.css
import useInView from "./useInView"; // Import the useInView hook

const About = ({ slideDirection }) => {
  const navigate = useNavigate();
  const [aboutRef, isInView] = useInView({ threshold: 0.1 }); // Initialize the in-view hook

  const handleDiscoverMore = () => {
    navigate("/about-info");
  };

  // Determine animation classes based on swipe direction
  const animationClassLeft = isInView ? "animate__fadeInLeft" : "";
  const animationClassRight = isInView ? "animate__fadeInRight" : "";
  const selectedAnimation = slideDirection === "right" ? animationClassLeft : animationClassRight;

  return (
    <div className="containerr" ref={aboutRef}>
      <div className="left">
        <img
          src="https://images.pexels.com/photos/27638171/pexels-photo-27638171/free-photo-of-bedroom-in-cabin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About us"
        />
      </div>

      <div className={`hr-container ${isInView ? `animate__animated ${selectedAnimation}` : ""}`}>
        <hr className={`breathing-hr ${isInView ? `animate__animated ${selectedAnimation}` : ""}`} />
      </div>

      <div className="right">
        <div className={`content ${isInView ? `animate__animated ${selectedAnimation}` : ""}`}>
          <h1 className={`${isInView ? `animate__animated ${selectedAnimation}` : ""}`}>ABOUT ME</h1>
          <p className={`${isInView ? "animate__animated animate__fadeInUp" : ""}`}>
            We are a company that specializes in delivering high-quality services and more than you expect, come to me and I will give you the unexpected...
          </p>
          <button
            className={`discover-btn ${isInView ? "animate__animated animate__fadeIn" : ""}`}
            onClick={handleDiscoverMore}
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
