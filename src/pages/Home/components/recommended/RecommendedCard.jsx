import React from "react";
import "./RecommendedCard.css";
import { useAudio } from "../../../../context/AudioContext";


export const RecommendedCard = ({
  title,
  author,
  image,
  tag,
  reason,
  duration,
  audio
}) => {
  const { playAudio } = useAudio();
  return (
    <div className="rec-card" onClick={() => playAudio({ title, author, image, audio })}>
      <div className="rec-img">
        <img src={image} alt={title} />

        <span className="rec-tag">{tag}</span>

        <div className="rec-play">▶</div>
      </div>

      <div className="rec-info">
        <h3>{title}</h3>
        <p>{author}</p>

        <span className="rec-reason">✨ {reason}</span>

        <div className="rec-bottom">
          <small>{duration}</small>
        </div>
      </div>
    </div>
  );
};