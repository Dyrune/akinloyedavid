import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

// City data array
const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const Hamburger = ({ state, swiperRef }) => {
  const navigate = useNavigate(); // Use React Router's useNavigate for navigation
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  // Menu open/close animation based on state
  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  // Function to close menu and navigate to the page
  const handleLinkClick = (e, path) => {
    e.preventDefault(); // Prevent immediate link navigation
  
    // Navigate to the page right away
    navigate(path);
  
    // Then start the close animation of the hamburger menu
    gsap.to(menuLayer, {
      duration: 1, // Keep this duration for smooth closing
      css: { display: "none" },
      onComplete: () => {
        // After the animation completes, navigate to the page
        navigate(path);
      }
    });
    
    // Smoothly close the other parts of the menu
    staggerRevealClose(reveal2, reveal1);
  };
  

  // Function to navigate to the Contact slide
  const goToContactSlide = (event) => {
    event.preventDefault();
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(3); // Navigate to Contact slide (Swiper index 3)
    }
  };

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <div ref={el => (reveal1 = el)} className="menu-secondary-background-color"></div>
      <div ref={el => (reveal2 = el)} className="menu-layer">
        <div ref={el => (cityBackground = el)} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/about-info"
                      onClick={(e) => handleLinkClick(e, '/about-info')} // Trigger close and navigate
                    >
                      About Info
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      href="/more-info"
                      onClick={(e) => handleLinkClick(e, '/more-info')} // Trigger close and navigate
                    >
                      More Info
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
                <h3>My Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as Architecture publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
