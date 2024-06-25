import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './progressbar.css';

const DotProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const labels = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

  const handleDotClick = (index) => {
    if (index === progress) {
      if (progress + 1 === 5) {
        navigate('/next');
      } else {
        setProgress(progress + 1);
      }
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-line"></div>
      {labels.map((label, index) => (
        <div key={index} className="dot-container">
          <div
            className={`dot ${index < progress ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
          <div className="dot-label">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default DotProgressBar;
