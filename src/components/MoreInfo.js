import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ProjectDetailsModal from "./ProjectDetailsModal"; // Import the new component
import projects from './projectsData'; // Your projects data


const categories = ["All", "Web Design", "UI/UX", "Graphic Design", "Branding"]; // Define your categories

const Modal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const hoverTextRef = useRef(null);
  const projectGridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(modalRef.current, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" });
    gsap.to(closeBtnRef.current, { opacity: 1, delay: 0.5, duration: 0.5 });

    return () => {
      gsap.set(modalRef.current, { y: "100%", opacity: 0 });
    };
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  const handleMouseMove = (e) => {
    const hoverText = hoverTextRef.current;
    gsap.to(hoverText, {
      left: `${e.clientX + 70}px`,
      top: `${e.clientY + 0}px`,
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = (project) => {
    hoverTextRef.current.style.display = "block";
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    hoverTextRef.current.style.display = "none";
    setHoveredProject(null);
  };

  const handleWheelScroll = (e) => {
    const grid = projectGridRef.current;
    if (grid) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 10;
      gsap.to(grid, {
        scrollLeft: grid.scrollLeft + scrollAmount,
        duration: 5.2,
        ease: "power4.out",
      });
    }
  };

  const updateScrollProgress = () => {
    const grid = projectGridRef.current;
    if (grid) {
      const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
      const scrollLeft = grid.scrollLeft;
      const progress = (scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const grid = projectGridRef.current;
    if (grid) {
      grid.addEventListener("wheel", handleWheelScroll);
      grid.addEventListener("scroll", updateScrollProgress);
    }

    return () => {
      if (grid) {
        grid.removeEventListener("wheel", handleWheelScroll);
        grid.removeEventListener("scroll", updateScrollProgress);
      }
    };
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set the selected project
  };

  return (
    <div className="modal-overlay2" onClick={handleClose}>
      <div className="modal-content2" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <header className="modal-header2">
          <div className="header-left">
            <span className="logo">0tnda</span>
            <div className="contactt">
              <a href="/contact">Let's work together</a>
            </div>
          </div>
          <div className="filter-buttons">
            {/* Filter categories */}
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="close-btn2" ref={closeBtnRef} onClick={handleClose}>
            &times;
          </button>
        </header>

        <section className="project-grid-horizontal" ref={projectGridRef}>
          {/* Project grid */}
          {filteredProjects.map((project) => (
            <div
              className="project-item-horizontal"
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProjectClick(project)} // Handle click event
            >
              <img src={project.imgSrc} alt={project.title} className="project-image-horizontal" />
              <div className="project-number">
                <span>{`0${project.id}`}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="title-and-info">
          <div className="project-info-panel">
            <h2>{hoveredProject ? hoveredProject.title : "Scroll to Explore"}</h2>
            <p>{hoveredProject ? hoveredProject.category : "30 projects"}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
            </div>
          </div>
          <h1 className="header-title">Projects<sup>30</sup></h1>
        </div>

        <div className="hover-text" ref={hoverTextRef}>View</div>
      </div>

      {/* Render the project details modal if a project is selected */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} // Close the project modal
        />
      )}
    </div>
  );
};

export default Modal;
