import React, { useState } from 'react';
import { candidates, stages } from './data/candidates';
import Column from './components/Column';
import Modal from './components/Modal';
import './styles/App.css';
import Header from './components/Header';
import './styles/Header.css';	

const App = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <>
    <Header/>
    <div className="app-container">
      <h1>Recruitment Pipeline</h1>
      <div className="kanban">
        {stages.map(stage => (
          <Column
            key={stage}
            title={stage}
            candidates={candidates.filter(c => c.stage === stage)}
            onCardClick={setSelectedCandidate}
          />
        ))}
      </div>
      <Modal candidate={selectedCandidate} onClose={() => setSelectedCandidate(null)} />
    </div>
  </>  
  );
};

export default App;
