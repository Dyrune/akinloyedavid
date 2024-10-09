import React from "react";

const modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if it's closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times; {/* Close button */}
        </button>

        {/* Scrollable modal content */}
        <div className="modal-body">
          <h2>More Information</h2>
          <p>This is some more detailed information about our services.</p>
          <p>Content goes here and you can scroll if needed...</p>
        </div>
      </div>
    </div>
  );
};

export default modal;
