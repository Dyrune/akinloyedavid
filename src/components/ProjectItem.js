// src/components/ProjectItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import useInView from "./useInView";
import "animate.css";

const ProjectItem = ({ project, swipeDirection }) => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768; // Detect mobile view
  const [projectRef, isInView] = useInView({ threshold: 0.1, once: isMobile }); // Only animate once on mobile

  const openProjectDetails = () => {
    navigate(`/project-details/${project.id}`, { state: { project } });
  };

  // Determine animation class based on swipe direction
  const animationClass = swipeDirection === "left" ? "animate__fadeInRight" : "animate__fadeInUp";

  return (
    <div
      ref={projectRef}
      className={`project ${isInView ? `animate__animated ${animationClass}` : ""}`}
      onClick={openProjectDetails}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(20px)",
        transition: "opacity 1s ease-out, transform 1s ease-out"
      }}
    >
      <img src={project.imgSrc} alt={project.title} />
      <p>{project.location}</p>
    </div>
  );
};

export default ProjectItem;
