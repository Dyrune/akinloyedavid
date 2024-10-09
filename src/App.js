import React, { useEffect, useState, useRef } from "react";
import fullpage from "fullpage.js";  // Import fullpage.js
import "./sass/main.scss";
import "fullpage.js/dist/fullpage.css";  // Import fullpage.js CSS

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";  // About section
import Projects from "./components/Projects";  // Projects section
import Contact from "./components/Contact";  // Contact section
import Loader from "./components/Loader";  // Loader component

function App() {
  const [loading, setLoading] = useState(true);  // State to track loading
  const fullpageRef = useRef(null);  // Reference for fullPage.js wrapper
  const fullpageApi = useRef(null);  // Reference for fullpage API

  // Handle the loading effect and toggle the body's loading class
  useEffect(() => {
    if (loading) {
      document.querySelector("body").classList.add("loading");
    } else {
      document.querySelector("body").classList.remove("loading");
    }
  }, [loading]);

  // Initialize fullPage.js after loading completes
  useEffect(() => {
    if (!loading && fullpageRef.current) {
      setTimeout(() => {
        try {
          // Initialize fullPage.js and store the API instance
          fullpageApi.current = new fullpage(fullpageRef.current, {
            autoScrolling: true,         // Enable auto scrolling
            scrollHorizontally: true,     // Enable horizontal scrolling
            navigation: true,             // Display navigation dots
            scrollingSpeed: 1000,         // Smooth scrolling speed
            responsiveWidth: 900,         // Adjust for smaller screens
            slidesNavigation: true,       // Show dots for each slide
            controlArrows: false,         // Disable control arrows
            scrollBar: false,             // Disable scroll bars
          });

          // Handle horizontal mouse wheel scrolling
          const handleWheel = (event) => {
            if (fullpageApi.current) {
              // Get the current section index
              const activeSection = fullpageApi.current.getActiveSection().index;

              if (event.deltaY > 0) {
                // Scroll right if the wheel scrolls down, stop at last section
                if (activeSection !== 3) {  // Assuming the Contact section is the 4th one
                  fullpageApi.current.moveSlideRight();
                }
              } else if (event.deltaY < 0) {
                // Scroll left if the wheel scrolls up, stop at first section
                if (activeSection !== 0) {  // Assuming the Banner section is the first
                  fullpageApi.current.moveSlideLeft();
                }
              }
            }
          };

          // Add event listener for mouse wheel scroll
          window.addEventListener("wheel", handleWheel);

          // Cleanup on component unmount
          return () => {
            window.removeEventListener("wheel", handleWheel);
            if (fullpageApi.current) {
              fullpageApi.current.destroy();  // Properly destroy the fullPage.js instance
              fullpageApi.current = null;
            }
          };
        } catch (error) {
          console.error("Error initializing fullpage.js:", error);
        }
      }, 500);  // Delay ensures smooth transition from loader to fullPage
    }
  }, [loading]);

  return (
    <>
      {/* Animate Presence to handle loader and transitions */}
      {loading ? (
        <Loader setLoading={setLoading} />  // Show loader while loading is true
      ) : (
        <div id="fullpage-wrapper" ref={fullpageRef}>
          <div className="section">
            <Header />
            {/* Horizontal Slides */}
            <div className="slide"> <Banner /> </div>  {/* Section 1: Banner */}
            <div className="slide"> <About /> </div>   {/* Section 2: About */}
            <div className="slide"> <Projects /> </div> {/* Section 3: Projects */}
            <div className="slide"> <Contact /> </div> {/* Section 4: Contact */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;