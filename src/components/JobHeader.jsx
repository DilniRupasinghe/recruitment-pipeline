import React from 'react';
import './JobHeader.css';

const JobHeader = () => {
  return (
    <div className="job-header">
      <div className="job-header-left">
        <h1 className="job-title">Research and Development Officer</h1>
        <div className="job-details">
          <span className="job-status">Open</span>
          <span className="job-meta">• Researcher • Onsite</span>
          <span className="job-meta">• Created by Bagus Fikri</span>
        </div>
      </div>

      <div className="job-header-right">
        <span className="job-count">Job 1 of 8</span>
        <button className="share-button">Share & Promote</button>
      </div>
    </div>
  );
};

export default JobHeader;
