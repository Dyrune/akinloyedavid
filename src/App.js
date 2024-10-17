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
import ProjectDetailsModal from "./components/ProjectDetailsModal"; // Import Project Details Modal

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for About page
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false); // Modal state for More Info
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project
  const fullpageRef = useRef(null);
  const fullpageApi = useRef(null);

  // Modal open/close handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const closeMoreInfoModal = () => setIsMoreInfoModalOpen(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project); // Set the clicked project as the selected project
  };

  const closeProjectDetails = () => {
    setSelectedProject(null); // Reset selected project state
  };

  // Initialize fullPage.js
  useEffect(() => {
    if (!loading && fullpageRef.current) {
      try {
        // Initialize fullPage.js
        fullpageApi.current = new fullpage(fullpageRef.current, {
          navigation: true,
          scrollingSpeed: 1000,
          responsiveWidth: 900,
          slidesNavigation: true,
          controlArrows: false, // Disable default arrows
          onLeave: function (origin, destination, direction) {
            updateArrowVisibility(destination.index);
          },
          afterSlideLoad: function (section, origin, destination) {
            updateArrowVisibility(destination.index);
          },
        });
      } catch (error) {
        console.error("Error initializing fullpage.js:", error);
      }

      // Mouse wheel event for horizontal scrolling
      const handleWheel = (event) => {
        if (fullpageApi.current) {
          const activeSection = fullpageApi.current.getActiveSection().index;

          // Scroll right on wheel down
          if (event.deltaY > 0) {
            fullpageApi.current.moveSlideRight();
          }

          // Scroll left on wheel up
          if (event.deltaY < 0) {
            fullpageApi.current.moveSlideLeft();
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
  }, [loading]);

  // Disable/enable scrolling when modal is open/closed
  useEffect(() => {
    if (fullpageApi.current) {
      if (isModalOpen || isMoreInfoModalOpen || selectedProject) {
        fullpageApi.current.setAllowScrolling(false); // Disable scrolling when modal is open
      } else {
        fullpageApi.current.setAllowScrolling(true); // Re-enable scrolling when modal is closed
      }
    }
  }, [isModalOpen, isMoreInfoModalOpen, selectedProject]);

  const updateArrowVisibility = (index) => {
    const totalSlides = document.querySelectorAll(".slide").length;
    const leftArrow = document.getElementById("arrow-left");
    const rightArrow = document.getElementById("arrow-right");

    // Hide left arrow on the first slide
    if (index === 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "block";
    }

    // Hide right arrow on the last slide
    if (index === totalSlides - 1) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "block";
    }
  };

  return (
    <Router>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {/* Modal Component for About page */}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <h2>About Modal</h2>
              <p>This is the modal content for the About page.</p>
              <button onClick={closeModal}>Close Modal</button>
            </Modal>
          )}

          {/* More Info Modal */}
          {isMoreInfoModalOpen && (
            <MoreInfo onClose={closeMoreInfoModal}>
              <h2>More Info Modal</h2>
              <p>This is the modal content for the More Info section.</p>
              <button onClick={closeMoreInfoModal}>Close Modal</button>
            </MoreInfo>
          )}

          {/* Project Details Modal */}
          {selectedProject && (
            <ProjectDetailsModal project={selectedProject} onClose={closeProjectDetails} />
          )}

          <Routes>
            <Route
              path="/"
              element={
                <div id="fullpage-wrapper" ref={fullpageRef}>
                  <div className="section">
                    <Header />
                    <div className="slide">
                      <Banner moveSlideRight={() => fullpageApi.current.moveSlideRight()} />
                    </div>
                    {/* Section 1: Banner */}
                    <div className="slide">
                      <About openModal={openModal} />
                    </div>
                    {/* Section 2: About */}
                    <div className="slide">
                      {/* Pass setIsMoreInfoModalOpen and openProjectDetails to the Projects component */}
                      <Projects
                        setIsMoreInfoModalOpen={setIsMoreInfoModalOpen}
                        openProjectDetails={openProjectDetails}
                      />
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
