import React from "react";
import "./StoryCard.css";
import { useAudio } from "../../../../context/AudioContext";

export const StoryCard = ({ id, title, author, image, duration, audio, category }) => {

  const { playAudio } = useAudio();

  const handlePlay = () => {
    playAudio({
      id,
      title,
      author,
      image,
      audio,
      duration,
      category
    });
  };

  return (
    <div className="story-card" onClick={handlePlay}>
      
      <div className="image-container">
        <img src={image} alt={title} />

        <div className="play-overlay">
          ▶
        </div>
      </div>

      <div className="story-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <span>{duration} min</span>
      </div>

    </div>
  );
};