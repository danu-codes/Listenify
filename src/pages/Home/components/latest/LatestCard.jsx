import React from "react";
import "./LatestCard.css";

export const LatestCard = ({ title, author, image, duration }) => {
  return (
    <div className="latest-card">
      <div className="img-box">
        <img src={image} alt={title} />

        <span className="new-badge">NEW</span>

        <div className="play-btn">▶</div>
      </div>

      <div className="latest-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};