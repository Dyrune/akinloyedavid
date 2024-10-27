// MoreInfo.js

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import projects from './projectsData';
import useInView from "./useInView";
import ProjectItem from "./ProjectItem2";

// Define categories array at the top of the file
const categories = ["All", "Architecture", "Exterior", "Interior", "Masterplanning"];

// Page transition function
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


const MoreInfo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const projectGridRef = useRef(null);
  const hoverTextRef = useRef(null);
  const navigate = useNavigate();
  const [titleRef, isTitleInView] = useInView({ threshold: 0.2, once: true });

  useEffect(() => {
    if (isTitleInView) {
      gsap.fromTo(
        titleRef.current,
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, [isTitleInView]);

  const handleMouseMove = (e) => {
    gsap.to(hoverTextRef.current, {
      left: `${e.clientX + 10}px`,
      top: `${e.clientY + 10}px`,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
    hoverTextRef.current.style.display = "block";
    gsap.set(hoverTextRef.current, { scale: 1, opacity: 1 });
  };

  const handleMouseLeave = () => {
    hoverTextRef.current.style.display = "none";
    setHoveredProject(null);
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  const updateScrollProgress = () => {
    const grid = projectGridRef.current;
    if (grid) {
      const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
      const progress = (grid.scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const grid = projectGridRef.current;
    let scrollAnimation;

    if (isAutoScrolling && grid) {
      const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
      scrollAnimation = gsap.to(grid, {
        scrollLeft: maxScrollLeft,
        duration: 40,
        ease: "linear",
        repeat: -1,
        yoyo: true,
        onUpdate: updateScrollProgress,
      });
    } else if (scrollAnimation) {
      scrollAnimation.pause();
    }

    return () => {
      if (scrollAnimation) scrollAnimation.kill();
    };
  }, [isAutoScrolling]);

  const handleWheelScroll = (e) => {
    if (!isAutoScrolling) {
      e.preventDefault();
      const grid = projectGridRef.current;
      const scrollAmount = e.deltaY * 2;
      gsap.to(grid, {
        scrollLeft: `+=${scrollAmount}`,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: updateScrollProgress,
      });
    }
  };

  useEffect(() => {
    const grid = projectGridRef.current;
    if (grid && !isAutoScrolling) {
      grid.addEventListener("wheel", handleWheelScroll);
      grid.addEventListener("scroll", updateScrollProgress);
    }

    return () => {
      if (grid) {
        grid.removeEventListener("wheel", handleWheelScroll);
        grid.removeEventListener("scroll", updateScrollProgress);
      }
    };
  }, [isAutoScrolling]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const openProjectDetails = (project) => {
    pageTransition(); // Trigger page transition animation
    setTimeout(() => {
      navigate(`/project-details/${project.id}`, { state: { project } });
    }, 1200); // Sync with transition timing
  };

  return (
    <div className="modal-overlay2">
      <div className="loading-screen"></div> {/* Loading screen div */}
      <div className="modal-content2">
        <section className="project-grid-horizontal" ref={projectGridRef}>
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => openProjectDetails(project)}
            />
          ))}
        </section>

        <div className="title-and-info" ref={titleRef}>
          <div className="project-info-panel">
            <h2>{hoveredProject ? hoveredProject.title : `Scroll to Explore ${activeCategory}`}</h2>
            <p className="jar">{hoveredProject ? hoveredProject.location : `${filteredProjects.length} projects`}
        <button onClick={toggleAutoScroll} className="scroll-control-btn">
          {isAutoScrolling ? '||' : '▶'}
        </button></p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${scrollProgress}%` }}></div> 
            </div>
          </div>

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

          <h4 className="header-title">
            {activeCategory}
            <sup>{filteredProjects.length}</sup>
          </h4>
        </div>

        <div
          className="hover-text"
          ref={hoverTextRef}
          style={{ position: "absolute", display: "none", transformOrigin: "center" }}
        >
          View
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
