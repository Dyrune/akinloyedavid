import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import your custom components
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hamburger from "./components/Hamburger"; // Import your Hamburger component
import AboutInfo from "./components/AboutInfo";
import MoreInfo from "./components/MoreInfo";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);
  const aboutRef = useRef(null);

  // Disable body scrolling when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  // Detect screen size to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      setActiveIndex(swiper.activeIndex);
    }
  };

  // Function to open modal and disable interactions
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal and re-enable interactions
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loader setLoading={setLoading} />;
  }

  return (
    <Router>
      <div className="App">
        {/* Persistent Header - Hide only when modal is open */}
        {!isModalOpen && <Header />}

        {/* Main Routes and Content */}
        <Routes>
          <Route
            path="/"
            element={
              <AppContent
                isMobile={isMobile}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
                slideNext={slideNext}
                slidePrev={slidePrev}
                handleSlideChange={handleSlideChange}
                aboutRef={aboutRef}
                swiperRef={swiperRef}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/more-info" element={<MoreInfo />} />  {/* Opens as a page, not modal */}
          <Route path="/projects" element={<Projects openModal={openModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-info" element={<AboutInfo />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <ProjectDetails closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

// Separated component for app content to access useLocation inside Router context
const AppContent = ({
  isMobile,
  activeIndex,
  setActiveIndex,
  isModalOpen,
  openModal,
  closeModal,
  slideNext,
  slidePrev,
  handleSlideChange,
  aboutRef,
  swiperRef
}) => {
  return (
    <div>
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Banner slideNext={slideNext} scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })} isMobile={isMobile} />
          <div ref={aboutRef}>
            <About />
          </div>
          <Projects openModal={openModal} />
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
            onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              <Banner slideNext={slideNext} isMobile={isMobile} />
            </SwiperSlide>
            <SwiperSlide>
              <About />
            </SwiperSlide>
            <SwiperSlide>
              <Projects openModal={openModal} />
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
