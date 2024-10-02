import React from 'react';
import '../modal.css'; // Import the CSS for the modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        {children}
      </div>
    </div>
  );
};

export default Modal;