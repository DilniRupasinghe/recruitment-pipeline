import React from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidate, onClick }) => (
  <div className="card" onClick={() => onClick(candidate)}>
    <img src={candidate.avatar} alt={candidate.name} className="avatar" />
    <div>
      <h4>{candidate.name}</h4>
      <p>Applied at {candidate.appliedAt}</p>
      <p>⭐ {candidate.rating} Overall</p>
      {candidate.referred && <span className="badge">Referred</span>}
    </div>
  </div>
);

export default CandidateCard;
