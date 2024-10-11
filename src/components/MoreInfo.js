import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
