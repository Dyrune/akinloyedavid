import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import projects from './projectsData'; // Your projects data

const categories = ["All", "Architecture", "Exterior", "Interior", "Masterplanning"];

const MoreInfo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectGridRef = useRef(null);
  const hoverTextRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleMouseMove = (e) => {
    const hoverText = hoverTextRef.current;
    gsap.to(hoverText, {
      left: `${e.clientX + 60}px`,
      top: `${e.clientY + 20}px`,
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

  // Filter projects based on the active category
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const currentCategoryName = activeCategory === "All" ? "Projects" : activeCategory;

  // Navigate to the ProjectDetails page when a project is clicked
  const openProjectDetails = (project) => {
    navigate(`/project-details/${project.id}`, { state: { project } }); // Pass project data via state
  };

  return (
    <div className="modal-overlay2">
      <div className="modal-content2">

        {/*  <header className="modal-header2">
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

         
          <button className="go-back-btn" onClick={() => navigate(-1)}>
            &#8592;
          </button>
        </header>*/}
      

        <section className="project-grid-horizontal" ref={projectGridRef}>
          {/* Project grid */}
          {filteredProjects.map((project) => (
            <div
              className="project-item-horizontal"
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openProjectDetails(project)} // Navigate to ProjectDetails page
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
            <h2>{hoveredProject ? hoveredProject.title : `Scroll to Explore ${currentCategoryName}`}</h2>
            <p>{hoveredProject ? hoveredProject.location : `${filteredProjects.length} ${currentCategoryName.toLowerCase()}`}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
            </div>
          </div>
 {/* Filter categories */}
 <div className="filter-buttons">
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
          <h1 className="header-title">
            {currentCategoryName}
            <sup>{filteredProjects.length}</sup>
          </h1>
        </div>

        <div className="hover-text" ref={hoverTextRef}>View</div>
      </div>
    </div>
  );
};

export default MoreInfo;
