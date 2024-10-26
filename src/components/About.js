import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import useInView from "./useInView";

const About = ({ slideDirection }) => {
  const navigate = useNavigate();
  const [animationPlayed, setAnimationPlayed] = useState(false); // Track if animation has played
  const [aboutRef, isInView] = useInView({ threshold: 0.1 });

  if (isInView && !animationPlayed) {
    setAnimationPlayed(true);
  }

  const handleDiscoverMore = () => {
    navigate("/about-info");
  };

  // Determine animation classes based on swipe direction
  const animationClassLeft = animationPlayed ? "animate__fadeInLeft fade-in-animation" : "";
  const animationClassRight = animationPlayed ? "animate__fadeInRight fade-in-animation" : "";
  const selectedAnimation = slideDirection === "right" ? animationClassLeft : animationClassRight;

  return (
    <div className="containerr" ref={aboutRef}>
      <div className="left">
        <img
          src="https://images.pexels.com/photos/27638171/pexels-photo-27638171/free-photo-of-bedroom-in-cabin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About us"
        />
      </div>

      <div className="hr-container">
        <hr className={`breathing-hr ${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`} />
      </div>

      <div className="right">
        <div className={`content ${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`}>
          <h1 className={`${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`}>ABOUT ME</h1>
          <p className={`${animationPlayed ? "animate__animated animate__fadeInUp fade-in-animation" : ""}`}>
            We are a company that specializes in delivering high-quality services and more than you expect, come to me and I will give you the unexpected...
          </p>
          <button
            className={`discover-btn ${animationPlayed ? "animate__animated animate__fadeIn fade-in-animation" : ""}`}
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
