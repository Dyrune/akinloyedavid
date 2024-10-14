import React from "react";

const Projects = ({ setIsMoreInfoModalOpen }) => {
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
          {/* Images and brief for each project */}
          <div className="project">
            <img
              src="https://images.pexels.com/photos/21711031/pexels-photo-21711031/free-photo-of-residential-building-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Project 1"
            />
            <p>Project 1 - A brief about the first project goes here.</p>
          </div>
          <div className="project">
            <img
              src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Project 2"
            />
            <p>Project 2 - A brief about the second project goes here.</p>
          </div>
          <div className="project">
            <img
              src="https://images.pexels.com/photos/11701125/pexels-photo-11701125.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 3"
            />
            <p>Project 3 - A brief about the third project goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
