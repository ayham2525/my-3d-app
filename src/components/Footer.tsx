import React from "react";
import imagePaths from "../imagePaths";
import "../styles/Footer.scss";

interface FooterProps {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleZoomReset: () => void;
}

export default function Footer({ handleZoomIn, handleZoomOut, handleZoomReset }: FooterProps) {
  return (
    <div className="zoom-controls">
     
      <button className="zoom-button" onClick={handleZoomIn}>
        <img src={imagePaths.zoomIn} alt="Zoom In" />
      </button>

      
      <button className="zoom-button" onClick={handleZoomOut}>
        <img src={imagePaths.zoomOut} alt="Zoom Out" />
      </button>

     
      <button className="zoom-button" onClick={handleZoomReset}>
        <img src={imagePaths.zoomReset} alt="Full Screen" />
      </button>
    </div>
  );
}
