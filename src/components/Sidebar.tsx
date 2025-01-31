import React from "react";
import imagePaths from "../imagePaths";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">
        <img src={imagePaths.cardio_load} alt="Cardio Load" />
      </button>
      <button className="sidebar-button">
        <img src={imagePaths.urology} alt="Urology" />
      </button>
    </div>
  );
};

export default Sidebar;
