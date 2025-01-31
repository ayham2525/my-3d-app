import React from "react";
import imagePaths from "../imagePaths";
import "../styles/Header.scss";

interface HeaderProps {
  riskCount: number; 
  onIncreaseRisk: () => void;
}

const Header: React.FC<HeaderProps> = ({ riskCount, onIncreaseRisk }) => {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={imagePaths.logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <button className="active">
          <img src={imagePaths.dashboard} alt="Dashboard" />
          Dashboard
        </button>
        <button>
          <img src={imagePaths.goals} alt="Goals" />
          Goals
        </button>
        <button>
          <img src={imagePaths.report} alt="Report" />
          Report
        </button>
        <button>
          <img src={imagePaths.supplements} alt="Supplements" />
          Supplements
        </button>
        <button>
          <img src={imagePaths.prescription} alt="Tests" />
          Tests
        </button>
      </div>

  
      <div className="nav-right">
        <button className="risk-button custom-button" onClick={onIncreaseRisk}>
          <img src={imagePaths.cardio_load} alt="Risk Icon" />
          <span className="risk-count">+{riskCount}</span> 
        </button>
        <button className="risk-button">
        <img src={imagePaths.urology} alt="Urology Icon" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
