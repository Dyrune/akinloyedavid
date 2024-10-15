import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ProjectDetailsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // State for tracking the currently displayed image for each image object
  const [currentImages, setCurrentImages] = useState(
    project.images.map((image) => image.src) // Initialize with the original src for each image
  );

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

  // Handle thumbnail click to switch the main image
  const handleThumbnailClick = (imageIndex, newSrc) => {
    const updatedImages = [...currentImages]; // Create a copy of current images
    updatedImages[imageIndex] = newSrc; // Update the specific image's src
    setCurrentImages(updatedImages); // Update the state
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

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        
        {/* Header Section */}
        <header className="modal-header3">
          <div className="header-left">
            <span className="logo">0tnda</span>
            <div className="contactt">
              <a href="/contact">Let's work together</a>
            </div>
          </div>
          <button className="close-btn2" ref={closeBtnRef} onClick={handleClose}>
            &times;
          </button>
        </header>

        {/* Prescription on the right side */}
        <div className="prescription-section">
          <p>This project was focused on creating an interactive, responsive website for a client. The key technologies used include React, Node.js, and Express.</p>
        </div>

        {/* Title and Main Image Section */}
        <div className="title-image-section">
          <div className="project-title">
            <h1>{project?.title}</h1>
          </div>
          {project?.imgSrc && (
            <div className="main-image-container">
              <img src={project.imgSrc} alt={`${project.title} main image`} className="main-project-image" />
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
                  className={`image-container ${
                    index % 2 === 0 ? "align-right" : "align-left"
                  }`}
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
                              onClick={() => handleThumbnailClick(index, thumbnail)} // Switch the main image to this thumbnail when clicked
                              style={{ cursor: 'pointer', marginRight: '0px' }}
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
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
              </div>
              <div className="footer-column">
                <p>Instagram</p>
                <p>X (formerly Twitter)</p>
                <p>Upwork</p>
                <p>LinkedIn</p>
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
                <a href="#top" className="scroll-arrow">↑</a>
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
