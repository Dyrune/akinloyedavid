import React, { useState, useEffect, useRef, createContext, useContext } from "react";
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

// Swiper Context to track Swiper state across pages
const SwiperContext = createContext();
const useSwiperState = () => useContext(SwiperContext);

// GSAP Animation functions for About slide transitions
function animateSlideTransition(slideDirection) {
  const tl = gsap.timeline();
  if (slideDirection === "next") {
    tl.fromTo(".about-slide", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
  } else {
    tl.fromTo(".about-slide", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
  }
}

// General Page Transition and Content Animation functions
function pageTransition() {
  const tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  }).to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  }).set(".loading-screen", { left: "-100%" });
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);
  const aboutRef = useRef(null);
  
  // Track active slide index in SwiperContext
  const [swiperIndex, setSwiperIndex] = useState(0);

  // Handle loading, resizing, and dark mode
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loading]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  const slideNext = () => swiperRef.current?.swiper?.slideNext();
  const slidePrev = () => swiperRef.current?.swiper?.slidePrev();

  // Track slide changes
  const handleSlideChange = () => {
    if (swiperRef.current?.swiper) {
      setSwiperIndex(swiperRef.current.swiper.activeIndex);
      animateSlideTransition(swiperRef.current.swiper.swipeDirection === "right" ? "next" : "prev"); // Smooth transition
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <SwiperContext.Provider value={{ swiperIndex, setSwiperIndex }}>
      <Router>
        <div className="App">
          <div className="loading-screen"></div>
          {!isModalOpen && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <AppContent
                  isMobile={isMobile}
                  swiperRef={swiperRef}
                  handleSlideChange={handleSlideChange}
                  isModalOpen={isModalOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                  slideNext={slideNext}
                  slidePrev={slidePrev}
                  aboutRef={aboutRef}
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
          <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
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
    </SwiperContext.Provider>
  );
}

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pageTransition();
    contentAnimation(); // Call contentAnimation here to avoid undefined error
  }, [location]);

  return children;
};

const AppContent = ({
  isMobile,
  swiperRef,
  handleSlideChange,
  isModalOpen,
  openModal,
  closeModal,
  slideNext,
  slidePrev,
  aboutRef,
  darkMode,
  setDarkMode,
}) => {
  const { swiperIndex, setSwiperIndex } = useSwiperState();

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(swiperIndex, 0); // Restore to last index
    }
  }, [swiperRef, swiperIndex]);

  return (
    <div>
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Banner slideNext={slideNext} scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })} isMobile={isMobile} />
          <div ref={aboutRef} className="about-slide">
            <About />
          </div>
          <Projects openModal={openModal} />
          <Contact />
          <Footer />
        </div>
      ) : (
        <>
          <div className="custom-navigation">
            <button className="swiper-button-prev" onClick={slidePrev} aria-label="Previous Slide" style={{ visibility: swiperIndex > 0 ? "visible" : "hidden" }}>
              &#8592;
            </button>
            <button className="swiper-button-next" onClick={slideNext} aria-label="Next Slide" style={{ visibility: swiperIndex < 3 ? "visible" : "hidden" }}>
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
            <SwiperSlide><Banner slideNext={slideNext} isMobile={isMobile} /></SwiperSlide>
            <SwiperSlide><About className="about-slide" /></SwiperSlide>
            <SwiperSlide><Projects openModal={openModal} /></SwiperSlide>
            <SwiperSlide><Contact /></SwiperSlide>
          </Swiper>
          <div className="custom-pagination"></div>
        </>
      )}
    </div>
  );
};

export default App;
