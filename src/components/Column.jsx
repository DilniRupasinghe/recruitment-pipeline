import React from 'react';
import CandidateCard from './CandidateCard';
import '../styles/Column.css';

const Column = ({ title, candidates, onCardClick }) => (
  <div className="column">
    <h3>{title} ({candidates.length})</h3>
    {candidates.map(candidate => (
      <CandidateCard
        key={candidate.id}
        candidate={candidate}
        onClick={onCardClick}
      />
    ))}
  </div>
);

export default Column;
