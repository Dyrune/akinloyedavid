import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import fullpage from "fullpage.js"; // Import fullpage.js
import "./sass/main.scss";
import "fullpage.js/dist/fullpage.css"; // Import fullpage.js CSS

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import MoreInfo from "./components/MoreInfo"; // New page for "Discover More"
import Modal from "./components/aboutinfo"; // Modal component

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const fullpageRef = useRef(null);
  const fullpageApi = useRef(null);

  // Modal open/close handler
  const closeModal = () => setIsModalOpen(false);

  // Initialize or destroy fullPage.js depending on modal state
  useEffect(() => {
    // Initialize fullpage.js
    if (!loading && fullpageRef.current) {
      try {
        fullpageApi.current = new fullpage(fullpageRef.current, {
          navigation: true,
          scrollingSpeed: 1000,
          responsiveWidth: 900,
          slidesNavigation: true,
          controlArrows: false, // Disable default arrows, we will add custom ones
          onLeave: function(origin, destination, direction){
            updateArrowVisibility(destination.index);
          },
          afterSlideLoad: function(section, origin, destination){
            updateArrowVisibility(destination.index);
          }
        });
      } catch (error) {
        console.error("Error initializing fullpage.js:", error);
      }
  
      // Add horizontal scrolling (wheel event)
      const handleWheel = (event) => {
        if (fullpageApi.current) {
          const activeSection = fullpageApi.current.getActiveSection().index;
  
          if (event.deltaY > 0) {
            if (activeSection !== 3) fullpageApi.current.moveSlideRight();
          } else if (event.deltaY < 0) {
            if (activeSection !== 0) fullpageApi.current.moveSlideLeft();
          }
        }
      };
  
      // Add mouse wheel event listener
      window.addEventListener("wheel", handleWheel);
  
      // Cleanup function
      return () => {
        window.removeEventListener("wheel", handleWheel);
        if (fullpageApi.current) {
          fullpageApi.current.destroy();
          fullpageApi.current = null;
        }
      };
    }
  }, [loading]); // Only run when loading changes
  
  useEffect(() => {
    // Destroy fullpage.js instance when modal opens
    if (isModalOpen && fullpageApi.current) {
      fullpageApi.current.destroy();
      fullpageApi.current = null;
    }
  }, [isModalOpen]); // Run when modal state changes

  const updateArrowVisibility = (index) => {
    // Show or hide arrows based on slide index (if needed)
    const totalSlides = document.querySelectorAll('.slide').length;
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');

    if (index === 0) {
      leftArrow.style.display = 'none'; // Hide left arrow on the first slide
    } else {
      leftArrow.style.display = 'block';
    }

    if (index === totalSlides - 1) {
      rightArrow.style.display = 'none'; // Hide right arrow on the last slide
    } else {
      rightArrow.style.display = 'block';
    }
  }

  return (
    <Router>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {/* Modal Component */}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <h2>Modal Header</h2>
              <p>This is the modal content for the About page</p>
              <button onClick={closeModal}>Close Modal</button>
            </Modal>
          )}

          <Routes>
            <Route
              path="/"
              element={
                <div id="fullpage-wrapper" ref={fullpageRef}>
                  <div className="section">
                    <Header />
                    <div className="slide">
                      <Banner />
                    </div>
                    {/* Section 1: Banner */}
                    <div className="slide">
                      <About openModal={() => setIsModalOpen(true)} />
                    </div>
                    {/* Section 2: About */}
                    <div className="slide">
                      <Projects />
                    </div>
                    {/* Section 3: Projects */}
                    <div className="slide">
                      <Contact />
                    </div>
                    {/* Section 4: Contact */}
                  </div>
                </div>
              }
            />
            {/* New route for the More Info page */}
            <Route path="/more-info" element={<MoreInfo />} />
          </Routes>

          {/* Custom Navigation Arrows */}
          <div id="arrow-left" className="custom-arrow" onClick={() => fullpageApi.current.moveSlideLeft()}>
            &#9664; {/* Left Arrow */}
          </div>
          <div id="arrow-right" className="custom-arrow" onClick={() => fullpageApi.current.moveSlideRight()}>
            &#9654; {/* Right Arrow */}
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
