import React, { useEffect, useState } from "react";
import "../styles/InfoCard.scss";

const InfoCard = ({ progress, zoom }: { progress: number; zoom: boolean }) => {
  const [animatedProgress, setAnimatedProgress] = useState(50);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200); 
  }, [progress]);

  return (
    <div className="info-card">
      <div className="info-header">
        <span className="step">1</span>
        <h2>Action</h2>
      </div>
      <p className="info-text">
        {zoom
          ? "The model is zoomed in. Adjust the opacity and analyze details."
          : "Click to zoom in on the model, change opacity to 50%, and update the risk card accordingly."}
      </p>
      <div className="progress-bar">
        <span className="progress-text">{animatedProgress}%</span>
        <div className="progress-container">
          <div
            className="progress-fill"
            style={{ width: `${animatedProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
