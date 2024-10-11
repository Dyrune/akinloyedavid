import React, { useEffect } from 'react';

const Modal = ({ onClose }) => {
  useEffect(() => {
    // Disable FullPage.js scrolling when the modal is opened
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(false);
    }

    return () => {
      // Re-enable FullPage.js scrolling when the modal is closed
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Cancel button at the top right */}
        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* About Page Info */}
        <div className="about-section">
          <h2>ABOUT ME</h2>

          {/* Grid layout for About, Mission, Vision, and Name */}
          <div className="grid-section">
            <div className="grid-item">
              <p>The escalating complexity of the world and the accelerating speed of change exceed any individual’s capacity to comprehend. For architects operating today, the Golden Ratio is no longer the standard - rather, the UN’s 17 Sustainable Development Goals are. From a single elegant equation, architects are now held to multidimensional success criteria with almost infinite variables.</p>
            </div>
            <div className="grid-item">
              <p>BIG has grown organically over the last two decades from a founder, to a family, to a force of 700. Our latest transformation is the BIG LEAP: Bjarke Ingels Group of Landscape, Engineering, Architecture, Planning and Products. A plethora of in-house perspectives allows us to see what none of us would be able to see on our own. The sum of our individual talents becomes our collective creative genius. A small step for each of us becomes a BIG LEAP for all of us.</p>
            </div>
            <div className="grid-item">
              <p>Since sustainability is inherently a question of complex systems, circular design, and holistic thinking, no single person holds the solution. As architects and urbanists, we must team with scientists, engineers with biologists, politicians with entrepreneurs, to combine skill sets and perspectives, knowledge and sensibility, to match the complexity of the challenges we face. As future formgivers, we won’t be defined by our individual talents or singular skill sets - but rather by our capacity to pool the skills of the many to give our future form.</p>
            </div>
            <div className="grid-item">
              <h3>AKINLOYE T. DAVID</h3>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <img
              src="https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Company Overview"
              className="about-image"
            />
          </div>

          {/* Next Section: Education */}
          <div className="education-section">
            <h2>Education</h2>
            <p>
              <strong>School:</strong> ABC University
              <br />
              <strong>Degree:</strong> Bachelor's in Architecture
              <br />
              <strong>Year:</strong> 2015 - 2019
            </p>
            <p>
              <strong>School:</strong> DEF College
              <br />
              <strong>Degree:</strong> Master's in Urban Planning
              <br />
              <strong>Year:</strong> 2020 - 2022
            </p>
          </div>

          {/* Topic Change Indicator */}
          <div className="section-divider">--- End of About ---</div>

          {/* Services Section */}
          <div className="services-section">
            <h2>Our Services</h2>
            <div className="grid-section">
              <div className="grid-item">
                <h3>Architecture</h3>
                <p>Providing innovative architectural solutions...</p>
              </div>
              <div className="grid-item">
                <h3>Planning</h3>
                <p>Comprehensive urban and rural planning services...</p>
              </div>
              <div className="grid-item">
                <h3>Masterplanning</h3>
                <p>Strategic masterplanning for sustainable growth...</p>
              </div>
              <div className="grid-item">
                <h3>Solutions</h3>
                <p>Delivering end-to-end technical solutions for complex problems...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
