import React from "react";
import "./LatestCard.css";
import { useAudio } from "../../../../context/AudioContext";

export const LatestCard = ({ title, author, image, duration, audio }) => {
  const { playAudio } = useAudio();
  return (
    <div className="latest-card" onClick={() => {
      console.log("Audio URL:", audio);
      playAudio({ title, author, image, audio });
    }}>
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