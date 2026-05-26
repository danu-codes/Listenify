import React from "react";
import "./StoryCard.css";

export const StoryCard = ({ title, author, image, duration }) => {
  return (
    <div className="story-card">
      <div className="image-container">
        <img src={image} alt={title} />

        <div className="play-overlay">
          ▶
        </div>
      </div>

      <div className="story-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};