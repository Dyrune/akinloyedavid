import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import fullpage from "fullpage.js";
import "./sass/main.scss";
import "fullpage.js/dist/fullpage.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import MoreInfo from "./components/MoreInfo";
import Modal from "./components/aboutinfo";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import Footer from "./components/Footer"; // Import Footer

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const fullpageRef = useRef(null);
  const fullpageApi = useRef(null); // Holds the fullpage.js instance
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const aboutRef = useRef(null); // Reference for scrolling to "About" section

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const closeMoreInfoModal = () => setIsMoreInfoModalOpen(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const moveToAbout = () => {
    if (isMobile && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle resizing to detect mobile view and manage fullpage.js destruction
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      // Destroy FullPage.js if switching to mobile
      if (isMobileView && fullpageApi.current) {
        // Only destroy if fullpageApi is valid
        if (fullpageApi.current && typeof fullpageApi.current.destroy === 'function') {
          fullpageApi.current.destroy();
          fullpageApi.current = null;
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize FullPage.js for non-mobile devices
  useEffect(() => {
    if (!loading && fullpageRef.current && !isMobile) {
      try {
        fullpageApi.current = new fullpage(fullpageRef.current, {
          navigation: true,
          scrollingSpeed: 1000,
          slidesNavigation: true,
          controlArrows: false,
          onLeave: function (origin, destination, direction) {
            if (destination && destination.index !== undefined) {
              updateArrowVisibility(destination.index);
            }
          },
          afterSlideLoad: function (section, origin, destination) {
            if (destination && destination.index !== undefined) {
              updateArrowVisibility(destination.index);
            }
          },
        });
      } catch (error) {
        console.error("Error initializing fullpage.js:", error);
      }

      return () => {
        // Only clean up FullPage.js if it's initialized
        if (fullpageApi.current && typeof fullpageApi.current.destroy === 'function') {
          try {
            fullpageApi.current.destroy();
            fullpageApi.current = null;
          } catch (error) {
            console.error("Error destroying fullpage.js:", error);
          }
        }
      };
    }
  }, [loading, isMobile]);

  // Disable/enable scrolling when modal is open/closed
  useEffect(() => {
    if (fullpageApi.current) {
      if (isModalOpen || isMoreInfoModalOpen || selectedProject) {
        fullpageApi.current.setAllowScrolling(false);
      } else {
        fullpageApi.current.setAllowScrolling(true);
      }
    }
  }, [isModalOpen, isMoreInfoModalOpen, selectedProject]);

  const updateArrowVisibility = (index) => {
    const totalSlides = document.querySelectorAll(".slide")?.length;
    const leftArrow = document.getElementById("arrow-left");
    const rightArrow = document.getElementById("arrow-right");

    if (leftArrow && rightArrow && totalSlides !== undefined) {
      if (index === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "block";
      }

      if (index === totalSlides - 1) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "block";
      }
    }
  };

  return (
    <Router>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <h2>About Modal</h2>
              <p>This is the modal content for the About page.</p>
              <button onClick={closeModal}>Close Modal</button>
            </Modal>
          )}

          {isMoreInfoModalOpen && (
            <MoreInfo onClose={closeMoreInfoModal}>
              <h2>More Info Modal</h2>
              <p>This is the modal content for the More Info section.</p>
              <button onClick={closeMoreInfoModal}>Close Modal</button>
            </MoreInfo>
          )}

          {selectedProject && (
            <ProjectDetailsModal project={selectedProject} onClose={closeProjectDetails} />
          )}

          <Routes>
            <Route
              path="/"
              element={
                isMobile ? (
                  <div>
                    <Header />
                    <Banner moveToAbout={moveToAbout} isMobile={isMobile} />
                    <div ref={aboutRef}>
                      <About />
                    </div>
                    <Projects
                      setIsMoreInfoModalOpen={setIsMoreInfoModalOpen}
                      openProjectDetails={openProjectDetails}
                    />
                    <Contact />
                    <Footer /> {/* Add the Footer only for mobile */}
                  </div>
                ) : (
                  <div id="fullpage-wrapper" ref={fullpageRef}>
                    <div className="section">
                      <Header />
                      <div className="slide">
                        <Banner
                          moveSlideRight={() => fullpageApi.current.moveSlideRight()}
                          moveToAbout={moveToAbout}
                          isMobile={isMobile}
                        />
                      </div>
                      <div className="slide">
                        <About />
                      </div>
                      <div className="slide">
                        <Projects
                          setIsMoreInfoModalOpen={setIsMoreInfoModalOpen}
                          openProjectDetails={openProjectDetails}
                        />
                      </div>
                      <div className="slide">
                        <Contact />
                      </div>
                    </div>
                  </div>
                )
              }
            />
            <Route path="/more-info" element={<MoreInfo />} />
          </Routes>

          {!isMobile && (
            <>
              <div
                id="arrow-left"
                className="custom-arrow"
                onClick={() => fullpageApi.current.moveSlideLeft()}
              >
                &#9664;
              </div>
              <div
                id="arrow-right"
                className="custom-arrow"
                onClick={() => fullpageApi.current.moveSlideRight()}
              >
                &#9654;
              </div>
            </>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
