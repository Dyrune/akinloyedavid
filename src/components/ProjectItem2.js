import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ProjectItem = ({ project, onMouseMove, onMouseEnter, onMouseLeave, onClick, index }) => {
  const projectRef = useRef(null);

  useEffect(() => {
    // Animate each project item with a stagger effect from the right
    gsap.fromTo(
      projectRef.current,
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: index * 0.2, ease: "power3.out" } // Stagger by index
    );
  }, [index]);

  return (
    <div
      className="project-item-horizontal"
      ref={projectRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => onMouseEnter(project)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(project)}
    >
      <img src={project.imgSrc} alt={project.title} className="project-image-horizontal" />
      <div className="project-number">
        <span>{`0${project.id}`}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
