import React from "react";
import "../styles/RiskCard.scss";

interface RiskCardProps {
  progress: number;
  onProgressChange: (value: number) => void;
  riskCount: number; 
}

const RiskCard: React.FC<RiskCardProps> = ({ progress, onProgressChange, riskCount }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onProgressChange(value);
  };

  return (
    
    <div className="risk-card">
      {/* ✅ Show the risk count */}
      <span className="risk-number">+{riskCount}</span>

      <p>More risks considered for your wellness</p>

      <div className="progress-container">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSliderChange}
          className="progress-slider"
          style={{
            background: `linear-gradient(90deg, #007bff ${progress}%, #e5e8ec ${progress}%)`
          }}
        />
        <span className="progress-text">{progress}%</span>
      </div>

      <button className="order-button">Order DNA Test</button>
    </div>
  );
};

export default RiskCard;
