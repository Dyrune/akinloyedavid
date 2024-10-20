import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ProjectDetailsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // State for tracking the currently displayed image for each image object
  const [currentImages, setCurrentImages] = useState(
    project.images.map((image) => image.src) // Initialize with the original src for each image
  );

  // State for tracking if the view is mobile (under 756px)
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is below 756px
      setIsMobileView(window.innerWidth <= 756);
    };

    // Check initially on mount
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
    );
    gsap.to(closeBtnRef.current, { opacity: 1, delay: 0.5, duration: 0.5 });

    return () => {
      gsap.set(modalRef.current, { y: "100%", opacity: 0 });
    };
  }, []);

  // Handle thumbnail click to switch the main image, active only on desktop view
  const handleThumbnailClick = (imageIndex, newSrc) => {
    if (!isMobileView) {
      const updatedImages = [...currentImages]; // Create a copy of current images
      updatedImages[imageIndex] = newSrc; // Update the specific image's src
      setCurrentImages(updatedImages); // Update the state
    }
  };

  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  // Function to scroll to the top
  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>

        {/* Top Anchor (Target for Scroll to Top) */}
        <div id="top"></div>

        {/* Header Section */}
        <header className="modal-header3">
          <div className="header-left">
            <span className="logo">0tnda</span>
            <div className="contactt">
              <a href="/contact">
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.3 9.29 1.42 1.42 9.29-9.3V10h2V3z" />
                  <path d="M5 5v14h14v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5z" />
                </svg>
              </a>
            </div>
          </div>
          <button className="close-btn2" ref={closeBtnRef} onClick={handleClose}>
            &times;
          </button>
        </header>

        {/* Prescription on the right side */}
        <div className="prescription-section">
          <p>{project?.description}</p>
        </div>

        {/* Title and Main Image Section */}
        <div className="title-image-section">
          <div className="project-title">
            <h1>{project?.title}</h1>
          </div>
          {project?.imgSrc && (
            <div className="main-image-container">
              <img
                src={project.imgSrc}
                alt={`${project.title} main image`}
                className="main-project-image"
              />
            </div>
          )}
        </div>

        {/* Project Info and Description */}
        <div className="info-description-section">
          <div className="project-info">
            <ul className="tecno">
              {project?.technologies?.length > 0 ? (
                project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))
              ) : (
                <li>No technologies listed</li>
              )}
            </ul>
            <div className="cl">
              <h3>Client:</h3>
              <p>{project?.client || "Not specified"}</p>
            </div>
            <div className="cl">
              <h3>Location:</h3>
              <p>{project?.location || "Not specified"}</p>
            </div>
            <div className="cl">
              <h3>Category:</h3>
              <p>{project?.category || "Not specified"}</p>
            </div>
            <div className="cl">
              <h3>Project Stage:</h3>
              <p>{project?.projectStage || "Not specified"}</p>
            </div>
            <div className="cl">
              <h3>Deliverables:</h3>
              <ul>
                {project?.deliverables?.length > 0 ? (
                  project.deliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))
                ) : (
                  <li>No deliverables listed</li>
                )}
              </ul>
            </div>
          </div>

          <div className="project-description">
            <p>{project?.description || "No description provided"}</p>
          </div>
        </div>

        {/* Project Images Section */}
        <div className="project-images-section">
          <div className="project-images-grid">
            {project?.images?.length > 0 ? (
              project.images.map((image, index) => (
                <div
                  className={`image-container ${index % 2 === 0 ? "align-right" : "align-left"}`}
                  key={index}
                >
                  <div className="image-wrapper">
                    <img
                      src={currentImages[index]} // Dynamically update this image based on thumbnail click
                      alt={`${project.title} image ${index + 1}`}
                    />
                  </div>

                  {/* Image Description */}
                  {image.description && (
                    <div className="image-description">
                      <p>{image.description}</p>

                      {/* Thumbnails */}
                      {image?.thumbnails?.length > 0 && (
                        <div className="thumbnails">
                          {image.thumbnails.map((thumbnail, thumbIndex) => (
                            <img
                              key={thumbIndex}
                              src={thumbnail}
                              alt={`Thumbnail ${thumbIndex + 1}`}
                              className="thumbnail"
                              onClick={() => handleThumbnailClick(index, thumbnail)} // Switch the main image to this thumbnail when clicked (only on desktop view)
                              style={{
                                cursor: isMobileView ? "default" : "pointer", // Show pointer only if not in mobile view
                                marginRight: "0px",
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <hr className="dividder" />
        <div className="footer-section">
          {/* Top Part of the Footer */}
          <div className="footer-top">
            <div className="footer-links">
              <div className="footer-column">
                <a href="#home" className="contact-link">Home</a>
                <a href="#about" className="contact-link">About</a>
                <a href="#projects" className="contact-link">Projects</a>
                <a href="#contact" className="contact-link">Contact</a>
              </div>
              <div className="footer-column">
                <a href="https://instagram.com" target="_blank" className="contact-link">Instagram</a>
                <a href="https://twitter.com" target="_blank" className="contact-link">X (formerly Twitter)</a>
                <a href="https://upwork.com" target="_blank" className="contact-link">Upwork</a>
                <a href="https://linkedin.com" target="_blank" className="contact-link">LinkedIn</a>
              </div>
            </div>

            <div className="footer-contact">
              <a href="#contact" className="contact-link">CONTACT</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <p>@dyrune2024</p>
            </div>

            <div className="footer-right">
              <div className="scroll-top">
                <a href="#top" className="scroll-arrow" onClick={handleScrollToTop}>
                  ↑
                </a>
                <p>Scroll to top</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
