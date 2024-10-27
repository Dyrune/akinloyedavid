import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import useInView from "./useInView";
import gsap from "gsap";

function pageTransition() {
    const tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

const About = ({ slideDirection }) => {
  const navigate = useNavigate();
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [aboutRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isInView && !animationPlayed) setAnimationPlayed(true);
  }, [isInView, animationPlayed]);

  const handleDiscoverMore = () => {
    pageTransition();
    setTimeout(() => navigate("/about-info"), 1200); // Sync with transition timing
  };

  const animationClassLeft = animationPlayed ? "animate__fadeInLeft" : "";
  const animationClassRight = animationPlayed ? "animate__fadeInRight" : "";
  const selectedAnimation = slideDirection === "right" ? animationClassLeft : animationClassRight;

  return (
    <div className="containerr" ref={aboutRef}>
      <div className="left">
        <img
          src="https://images.pexels.com/photos/27638171/pexels-photo-27638171/free-photo-of-bedroom-in-cabin.jpeg"
          alt="About us"
        />
      </div>

      <div className="hr-container">
        <hr className={`breathing-hr ${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`} />
      </div>

      <div className="right">
        <div className={`content ${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`}>
          <h1 className={`${animationPlayed ? `animate__animated ${selectedAnimation}` : ""}`}>ABOUT ME</h1>
          <p className={`${animationPlayed ? "animate__animated animate__fadeInUp" : ""}`}>
            We are a company that specializes in delivering high-quality services and more than you expect...
          </p>
          <button
            className={`discover-btn ${animationPlayed ? "animate__animated animate__fadeIn" : ""}`}
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
