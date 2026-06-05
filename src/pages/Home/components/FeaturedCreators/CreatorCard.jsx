import React from "react";
import "./CreatorCard.css";

export const CreatorCard = ({ name, bio, image, followers }) => {
  return (
    <div className="featured-creator-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p>{bio}</p>

      <span>{followers} Followers</span>

      <button>Follow</button>

    </div>
  );
};