import React from "react";
import "./StoryCard.css";
import { useAudio } from "../../../../context/AudioContext";

export const StoryCard = ({ title, author, image, duration, audio }) => {
  const { playAudio } = useAudio();
  return (
    <div className="story-card" onClick={() => playAudio({ title, author, image, audio })}>
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