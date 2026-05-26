import React from "react";
import "./RecommendedCard.css";

export const RecommendedCard = ({
  title,
  author,
  image,
  tag,
  reason,
  duration,
}) => {
  return (
    <div className="rec-card">
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