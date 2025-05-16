import React, { useState } from 'react';
import './NavigationTabs.css';

const tabs = [
  'Candidates',
  'Job Info',
  'Calendar',
  'Score Card',
  'Activity',
  'Application Form',
  'Automation',
];

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('Candidates');

  return (
    <div className="navigation-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
