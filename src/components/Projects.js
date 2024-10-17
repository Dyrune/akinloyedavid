import React from "react";

const Projects = ({ setIsMoreInfoModalOpen, openProjectDetails }) => {
  const projects = [
    {
      id: 1,
      title: "Milliton Jnr. House",
      category: "Web Design", // Added category
      imgSrc: "https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thumbnail or cover image
      description: "A short description of the first project and I must tell you, it is one of a kind. You can't see me anywhere else, because I am automatic.",
      detailedDescription: `
        This project was focused on creating an interactive, responsive website for a client.
        The key technologies used include React, Node.js, and Express. We integrated several
        third-party APIs for dynamic content generation and implemented a custom backend
        for data handling and user authentication. The project involved:
        - Designing an intuitive UI/UX.
        - Backend setup for handling requests.
        - Integrating payment systems.
        - Deploying the final application on AWS.
      `,
      images: [
          {
            src: "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is an example of the first image description and it is not a decieption but a forestrysitories Factory. You must be told that this is not just fun",
            thumbnails: [
              "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1686090449625-16579c8ac225?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]
          },
          {
            src: "https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "" // No description for this image
          },
          {
            src: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is an example of the first image description and it is not a decieption but a forestrysitories Factory. You must be told that this is not just fun",
            thumbnails: [
              "https://plus.unsplash.com/premium_photo-1686090448331-206895954c61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1683891068478-9dc548ce7d20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]
          }
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
  },  {
      id: 2,
      title: "Byrouted",
      category: "UI/UX",
      imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This project focused on a sleek UI/UX design for an e-commerce platform, aiming to improve user experience and increase conversion rates.",
      detailedDescription: `
        For Byrouted, we designed an intuitive, user-centric interface, improving the usability and aesthetic appeal
        of the e-commerce platform. The project involved:
        - Prototyping the entire user flow.
        - Conducting user testing to optimize navigation.
        - Implementing responsive design to cater to mobile and desktop users.
        - Providing a seamless user experience.
      `,
      images: [
        {
          src: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "A sleek UI design to enhance the e-commerce experience."
        },
        {
          src: "https://images.pexels.com/photos/2064830/pexels-photo-2064830.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Mobile-friendly designs to ensure optimal usability."
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
  
    // Updated project 3
    {
      id: 3,
      title: "Gregort John",
      category: "Graphic Design",
      imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "A graphic design project focused on creating a brand identity for Gregort John, a luxury fashion brand.",
      detailedDescription: `
        We were tasked with developing a cohesive and sophisticated brand identity for Gregort John. This included:
        - Designing a new logo and visual identity system.
        - Creating a brand style guide to ensure consistent use across all platforms.
        - Developing marketing materials such as business cards, packaging, and social media templates.
      `,
      images: [
        {
          src: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          description: "The elegant new logo for Gregort John, conveying luxury and sophistication."
        },
        {
          src: "https://images.pexels.com/photos/12983801/pexels-photo-12983801.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Marketing materials designed with a focus on elegance and consistency."
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
    }
  ];

  return (
    <div className="projects-container">
      {/* Header - Full width row */}
      <div className="header-row">
        <h1>ARCHITECTURE</h1>
      </div>

      {/* Two-column layout for description and images */}
      <div className="content-row">
        <div className="left-column">
          <p>
            Explore our portfolio of architectural projects that reflect
            creativity, innovation, and precision. Each project showcases our
            commitment to quality and design excellence.
          </p>

          <button
            className="discovered"
            onClick={() => setIsMoreInfoModalOpen(true)} // Trigger the More Info modal
          >
            Discover Projects
          </button>
        </div>

        <div className="right-column">
          {/* Dynamically render the first three projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="project"
              onClick={() => openProjectDetails(project)} // Open project details modal on click
            >
              <img src={project.imgSrc} alt={project.title} />
              <p>{project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
