import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Categories array
const categories = ["All", "Web Design", "UI/UX", "Graphic Design", "Branding"];

const projects = [
  { id: 1, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Housing Flesed" },
  { id: 2, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Byrouted" }, 
  { id: 3, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Gregort John" },
  { id: 4, category: "Web Design", imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Ricked Gross" },
  { id: 5, category: "Branding", imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Slite Rapper" },
  { id: 6, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Soficated int" },
  { id: 7, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Kettled fright" },
  { id: 8, category: "Branding", imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Might not be" },
  { id: 9, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Question Mark" },
  { id: 10, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Passage " },
  { id: 11, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Mighty" },
  { id: 12, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Frighted" }, 
  { id: 13, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Graphic Money" },
  { id: 14, category: "Web Design", imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Around here" },
  { id: 15, category: "Branding", imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600", title: "BRended sis" },
  { id: 16, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600", title: "frighted grit" },
  { id: 17, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Eyedrop" },
  { id: 18, category: "Branding", imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Branding tool" },
  { id: 19, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Side House Bongalow" },
  { id: 20, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Alufa JOhn" },
  { id: 21, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=600", title: "oti daran" },
  { id: 22, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Frog Jump" }, 
  { id: 23, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Them Chronic" },
  { id: 24, category: "Web Design", imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Housed Frontier" },
  { id: 25, category: "Branding", imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Hoped Home" },
  { id: 26, category: "Graphic Design", imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Deadly right" },
  { id: 27, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", title: "Monstar we made" },
  { id: 28, category: "Branding", imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Killer House" },
  { id: 29, category: "Web Design", imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Pentagon" },
  { id: 30, category: "UI/UX", imgSrc: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Laste on surface" },
];


const Modal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null); // State for hovered project
  const [scrollProgress, setScrollProgress] = useState(0); // State for scroll progress
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const hoverTextRef = useRef(null);
  const projectGridRef = useRef(null); // Ref for the project grid

  useEffect(() => {
    // Slide-in animation
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
    // Apply gsap tween for lazy follow of hover text
    gsap.to(hoverText, {
      left: `${e.clientX + 70}px`, // Offset for better visibility
      top: `${e.clientY + 0}px`,  // Offset for better visibility
      duration: 1, // The duration for the text to catch up (increase for more "laziness")
      ease: "power3.out", // Easing for smooth following
    });
  };

  const handleMouseEnter = (project) => {
    hoverTextRef.current.style.display = "block";
    setHoveredProject(project); // Set the hovered project to be displayed
  };

  const handleMouseLeave = () => {
    hoverTextRef.current.style.display = "none";
    setHoveredProject(null); // Reset to default when hover leaves
  };

  const handleWheelScroll = (e) => {
    const grid = projectGridRef.current;
    if (grid) {
      e.preventDefault(); // Prevent default vertical scroll
  
      // Calculate the scroll amount based on the wheel delta
      const scrollAmount = e.deltaY * 10; // Original multiplier for speed
  
      // Use gsap to smoothly scroll horizontally with smoother deceleration
      gsap.to(grid, {
        scrollLeft: grid.scrollLeft + scrollAmount,
        duration: 5.2, // Longer duration for smoother scroll stop
        ease: "power4.out", // Easing for very smooth deceleration
      });
    }
  };
  


  // Update the scroll progress as the user scrolls horizontally
  const updateScrollProgress = () => {
    const grid = projectGridRef.current;
    if (grid) {
      const maxScrollLeft = grid.scrollWidth - grid.clientWidth; // Max scroll value
      const scrollLeft = grid.scrollLeft;
      const progress = (scrollLeft / maxScrollLeft) * 100; // Calculate the percentage
      setScrollProgress(progress); // Set the scroll progress percentage
    }
  };

  useEffect(() => {
    // Add wheel event listener for horizontal scrolling
    const grid = projectGridRef.current;
    if (grid) {
      grid.addEventListener("wheel", handleWheelScroll);
      grid.addEventListener("scroll", updateScrollProgress); // Track scroll progress
    }

    // Clean up the event listeners on unmount
    return () => {
      if (grid) {
        grid.removeEventListener("wheel", handleWheelScroll);
        grid.removeEventListener("scroll", updateScrollProgress);
      }
    };
  }, []);

  // Filtered projects based on the active category
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
            {/* Progress bar */}
            <div className="progress-bar">
              <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
            </div>
          </div>
          <h1 className="header-title">Projects<sup>30</sup></h1>
        </div>

        <div className="hover-text" ref={hoverTextRef}>View</div>
      </div>
    </div>
  );
};

export default Modal;
