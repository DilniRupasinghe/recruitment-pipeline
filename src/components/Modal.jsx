import React from 'react';
import '../styles/Modal.css';
const Modal = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{candidate.name}</h2>
        <p>Applied on: {candidate.appliedAt}</p>
        <p>Rating: ⭐ {candidate.rating}</p>
        {candidate.referred && <p>Referred Candidate</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
