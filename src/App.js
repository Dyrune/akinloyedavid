import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Mousewheel } from "swiper/modules";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";

// Import custom components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AboutInfo from "./components/AboutInfo";
import MoreInfo from "./components/MoreInfo";
import ProjectDetails from "./components/ProjectDetails";

// Transition functions
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

function contentAnimation() {
  const tl = gsap.timeline();
  tl.from(".animate-this", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
}

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const swiperRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dark/light theme class on <html> element
  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  const slideNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const slidePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleSlideChange = () => {
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      setPrevIndex(activeIndex);
      setActiveIndex(swiper.activeIndex);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const swipeDirection = activeIndex > prevIndex ? "left" : "right";

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <Router>
      <div className="App">
        <div className="loading-screen"></div> {/* Transition overlay */}
        {!isModalOpen && <Header />}

        {/* Main Routes and Content */}
        <Routes>
          <Route
            path="/"
            element={
              <AppContent
                isMobile={isMobile}
                activeIndex={activeIndex}
                prevIndex={prevIndex}
                swipeDirection={swipeDirection}
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                slideNext={slideNext}
                slidePrev={slidePrev}
                handleSlideChange={handleSlideChange}
                aboutRef={aboutRef}
                swiperRef={swiperRef}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/projects" element={<Projects openModal={openModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-info" element={<AboutInfo />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <ProjectDetails closeModal={closeModal} />
            </div>
          </div>
        )}

        {/* Dark Mode Toggle Button */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "10px",
              backgroundColor: "transparent",
              color: darkMode ? "white" : "black",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
        </div>
      </div>
    </Router>
  );
}

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pageTransition();
    contentAnimation();
  }, [location]);

  return children;
};

const AppContent = ({
  isMobile,
  activeIndex,
  prevIndex,
  swipeDirection,
  isModalOpen,
  openModal,
  closeModal,
  slideNext,
  slidePrev,
  handleSlideChange,
  aboutRef,
  swiperRef,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div>
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Banner slideNext={slideNext} scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })} isMobile={isMobile} />
          <div ref={aboutRef}>
            <About slideDirection={swipeDirection} />
          </div>
          <Projects slideDirection={swipeDirection} openModal={openModal} />
          <Contact />
          <Footer />
        </div>
      ) : (
        <>
          <div className="custom-navigation">
            <button
              className="swiper-button-prev"
              onClick={slidePrev}
              aria-label="Previous Slide"
              style={{ visibility: activeIndex > 0 ? "visible" : "hidden" }}
            >
              &#8592;
            </button>
            <button
              className="swiper-button-next"
              onClick={slideNext}
              aria-label="Next Slide"
              style={{ visibility: activeIndex < 3 ? "visible" : "hidden" }}
            >
              &#8594;
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Pagination, A11y, Mousewheel]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            mousewheel={!isModalOpen}
            speed={1000}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Banner slideNext={slideNext} isMobile={isMobile} />
            </SwiperSlide>
            <SwiperSlide>
              <About slideDirection={swipeDirection} />
            </SwiperSlide>
            <SwiperSlide>
              <Projects slideDirection={swipeDirection} openModal={openModal} />
            </SwiperSlide>
            <SwiperSlide>
              <Contact />
            </SwiperSlide>
          </Swiper>
          <div className="custom-pagination"></div>
        </>
      )}
    </div>
  );
};

export default App;
