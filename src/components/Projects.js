import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css"; // For animations
import ProjectItem from "./ProjectItem";
import useInView from "./useInView";
import gsap from "gsap";

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

const Projects = () => {
  const navigate = useNavigate();

  // State to track if animations have already played
  const [headerAnimationPlayed, setHeaderAnimationPlayed] = useState(false);
  const [paragraphAnimationPlayed, setParagraphAnimationPlayed] = useState(false);
  const [buttonAnimationPlayed, setButtonAnimationPlayed] = useState(false);

  // Track if elements are in view using custom hook
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.1 });
  const [paragraphRef, isParagraphInView] = useInView({ threshold: 0.1 });
  const [buttonRef, isButtonInView] = useInView({ threshold: 0.1 });

  // Set each animation to play only once when the component comes into view for the first time
  useEffect(() => {
    if (isHeaderInView && !headerAnimationPlayed) {
      setHeaderAnimationPlayed(true);
    }
  }, [isHeaderInView, headerAnimationPlayed]);

  useEffect(() => {
    if (isParagraphInView && !paragraphAnimationPlayed) {
      setParagraphAnimationPlayed(true);
    }
  }, [isParagraphInView, paragraphAnimationPlayed]);

  useEffect(() => {
    if (isButtonInView && !buttonAnimationPlayed) {
      setButtonAnimationPlayed(true);
    }
  }, [isButtonInView, buttonAnimationPlayed]);

  const handleDiscoverMore = () => {
    pageTransition();
    setTimeout(() => navigate("/more-info"), 1200); // Sync with transition timing
  };

  const projects = [
    {
      id: 1,
      title: "Milliton Jnr. House",
      category: "Architecture",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A short description of the first project and I must tell you, it is one of a kind. You can't see me anywhere else, because I am automatic.",
      detailedDescription: `
        This project was focused on creating an interactive, responsive website for a client.
        The key technologies used include React, Node.js, and Express. We integrated several
      `,
      images: [
        {
          src: "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "This is an example of the first image description and it is not a deception but a forestry site.",
          thumbnails: [
            "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1686090449625-16579c8ac225?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "This is another sample image description of a forestry-style building.",
          thumbnails: [
            "https://plus.unsplash.com/premium_photo-1686090448331-206895954c61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1683891068478-9dc548ce7d20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
        },
      ],
      features: [
        "Interactive design",
        "Third-party API integrations",
        "Responsive across all devices",
        "Custom CMS for content management",
      ],
      technologies: ["React", "Node.js", "Express", "AWS"],
      client: "Awesome Client Co.",
      location: "San Francisco, CA",
      projectStage: "Completed",
      deliverables: [
        "Website design",
        "Custom backend",
        "API integration",
        "Deployment on AWS",
      ],
    },
    {
      id: 2,
      title: "Byrouted",
      category: "Exterior",
      imgSrc:
        "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "This project focused on a sleek exterior design for an e-commerce platform, improving user experience and conversion rates.",
      detailedDescription: `
        For Byrouted, we designed an intuitive, user-centric interface, improving the usability and aesthetic appeal.
        The project involved:
        - Prototyping the entire user flow.
        - Conducting user testing to optimize navigation.
        - Implementing responsive design for both mobile and desktop users.
        - Providing a seamless user experience.
      `,
      images: [
        {
          src: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "A sleek UI design to enhance the e-commerce experience.",
        },
        {
          src: "https://images.pexels.com/photos/2064830/pexels-photo-2064830.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Mobile-friendly designs to ensure optimal usability.",
        },
      ],
      features: [
        "Mobile-first design",
        "Intuitive navigation",
        "User testing and feedback",
        "High-fidelity prototypes",
      ],
      technologies: ["Figma", "Sketch", "InVision"],
      client: "Byrouted Online Ltd.",
      location: "New York, NY",
      projectStage: "In Progress",
      deliverables: [
        "UI design",
        "User flow diagrams",
        "Prototype development",
        "User testing report",
      ],
    },
    {
      id: 3,
      title: "Gregort John",
      category: "Interior",
      imgSrc:
        "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:
        "An interior project focused on creating a brand identity for Gregort John, a luxury fashion brand.",
      detailedDescription: `
        We developed a cohesive and sophisticated brand identity for Gregort John, which included:
        - Designing a new logo and visual identity system.
        - Creating a brand style guide to ensure consistent use across all platforms.
        - Developing marketing materials such as business cards, packaging, and social media templates.
      `,
      images: [
        {
          src: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          description:
            "The elegant new logo for Gregort John, conveying luxury and sophistication.",
        },
        {
          src: "https://images.pexels.com/photos/12983801/pexels-photo-12983801.jpeg?auto=compress&cs=tinysrgb&w=600",
          description:
            "Marketing materials designed with a focus on elegance and consistency.",
        },
      ],
      features: [
        "Logo design",
        "Brand style guide",
        "Packaging design",
        "Social media templates",
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      client: "Gregort John Fashion",
      location: "Paris, France",
      projectStage: "Completed",
      deliverables: [
        "Brand identity",
        "Marketing collateral",
        "Packaging design",
        "Style guide",
      ],
    },
  ];

  return (
    <div className="projects-container">
      {/* Loading screen for smooth transitions */}
      <div
        className="loading-screen"
        style={{ position: "fixed", top: 0, left: 0, width: "0%", height: "100%", background: "#000", zIndex: 10 }}
      ></div>

      <div className="hr-container2">
        <hr className="breathing-hr2" />
      </div>

      <div className="header-row">
        <h1
          ref={headerRef}
          className={`${
            headerAnimationPlayed ? "animate__animated animate__fadeInDown" : ""
          }`}
        >
          ARCHITECTURE
        </h1>
      </div>

      <div className="content-row">
        <div className="left-column">
          <p
            ref={paragraphRef}
            className={`exploo ${
              paragraphAnimationPlayed ? "animate__animated animate__fadeInUp" : ""
            }`}
            style={{
              animationDuration: "1.5s",
              animationTimingFunction: "ease-in-out",
              opacity: paragraphAnimationPlayed ? "1" : "0",
            }}
          >
            Explore our portfolio of architectural projects that reflect creativity,
            innovation, and precisionwhat we do is architecture, planning and give solutions
          </p>
          <button
            ref={buttonRef}
            className={`discovered ${
              buttonAnimationPlayed ? "animate__animated animate__fadeIn" : ""
            }`}
            style={{
              animationDuration: "1.3s",
              animationTimingFunction: "ease-in-out",
              opacity: buttonAnimationPlayed ? "1" : "0",
            }}
            onClick={handleDiscoverMore}
          >
            Discover Projects
          </button>
        </div>

        <div className="right-column">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="button-container">
        <button id="discover2" className="discovered" onClick={handleDiscoverMore}>
          Discover More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;