import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const categories = ["All", "Web Design", "UI/UX", "Graphic Design", "Branding"];

const projects = [
  { id: 1, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Web Design 1" },
  { id: 2, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600", title: "UI/UX 1" }, 
  { id: 7, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "UI/UX 2" },
  { id: 2, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600", title: "UI/UX 1" },
  { id: 3, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Graphic Design 1" },
  { id: 4, category: "Web Design", imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Web Design 2" },
  { id: 5, category: "Branding", imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Branding 1" },
  { id: 3, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Graphic Design 1" },
  { id: 6, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Graphic Design2" },
  { id: 8, category: "Branding", imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Branding 2" },
  { id: 9, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Web Design 3" },
  { id: 1, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Web Design 1" },
  { id: 4, category: "Web Design", imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Web Design 2" },
  { id: 5, category: "Branding", imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Branding 1" },
  { id: 6, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Graphic Design 2" },
  { id: 7, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "UI/UX 2" },
  { id: 8, category: "Branding", imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Branding 2" },
  { id: 9, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Web Design 3" },
  { id: 10, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600", title: "UI/UX 3" },
];

const Modal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null); // State for hovered project
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const hoverTextRef = useRef(null);
  const projectGridRef = useRef(null); // Ref for the project grid

  useEffect(() => {
    // Slide in animation
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

  // Update cursor position and display hover text
  const handleMouseMove = (e) => {
    const hoverText = hoverTextRef.current;
    hoverText.style.left = `${e.pageX + 40}px`;
    hoverText.style.top = `${e.pageY - 12}px`;
  };

  const handleMouseEnter = (project) => {
    hoverTextRef.current.style.display = "block";
    setHoveredProject(project); // Set the hovered project to be displayed
  };

  const handleMouseLeave = () => {
    hoverTextRef.current.style.display = "none";
    setHoveredProject(null); // Reset to default when hover leaves
  };

  // Wheel event for horizontal scrolling
  const handleWheelScroll = (e) => {
    if (projectGridRef.current) {
      e.preventDefault(); // Prevent the default vertical scroll behavior
      projectGridRef.current.scrollLeft += e.deltaY; // Scroll horizontally based on vertical wheel delta
    }
  };

  useEffect(() => {
    // Add wheel event listener for horizontal scrolling
    const grid = projectGridRef.current;
    if (grid) {
      grid.addEventListener("wheel", handleWheelScroll);
    }

    // Clean up the event listener on unmount
    return () => {
      if (grid) {
        grid.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

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
          {/* Filter buttons */}
          <div className="filter-buttons">
            {categories.map((category) => (
              <button key={category} className={`filter-btn ${activeCategory === category ? "active" : ""}`} onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>
          <button className="close-btn2" ref={closeBtnRef} onClick={handleClose}>
            &times;
          </button>
        </header>

        {/* Project Grid Section */}
        <section className="project-grid-horizontal" ref={projectGridRef}>
          {filteredProjects.map((project) => (
            <div
              className="project-item-horizontal"
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(project)} // Send project data on hover
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.imgSrc} alt={project.title} className="project-image-horizontal" />
              <div className="project-number">
                <span>{`0${project.id}`}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Title and dynamic project info */}
        <div className="title-and-info">
          <div className="project-info-panel">
            <h2>{hoveredProject ? hoveredProject.title : "Scroll to Explore"}</h2>
            <p>{hoveredProject ? hoveredProject.category : "30 projects"}</p>
          </div>
          <h1 className="header-title">Projects<sup>30</sup></h1>
        </div>

        {/* Hover text */}
        <div className="hover-text" ref={hoverTextRef}>View Work</div>
      </div>
    </div>
  );
};

export default Modal;
