import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Tiimi Logo" className="logo" />
        <span className="title">Recruitment</span>
      </div>

      <div className="header-center">
        <button className="tab active">Jobs</button>
        <button className="tab">Candidate</button>
        <button className="tab">Career Site</button>
      </div>

      <div className="header-right">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">⚙️</button>
        <img src="/user.jpg" alt="User" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
