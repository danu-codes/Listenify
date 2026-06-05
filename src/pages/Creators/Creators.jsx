import React, { useState } from "react";
import "./Creators.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { creators } from "./CreatorsData";

export const Creators = () => {
  const [selectedCreator, setSelectedCreator] = useState(creators[0]);

  return (
    <>
      <Navbar />

      <div className="creator-page">

        {/* LEFT - DETAIL VIEW */}
        <div className="creator-detail">
          <img src={selectedCreator.image} alt="" />

          <h1>{selectedCreator.name}</h1>
          <p className="bio">{selectedCreator.bio}</p>

          <div className="stats">
            <span>🎭 {selectedCreator.category}</span>
            <span>👥 {selectedCreator.followers}</span>
            <span>📚 {selectedCreator.stories} stories</span>
          </div>
          <p className="description">{selectedCreator.description}</p>
        </div>

        {/* RIGHT - LIST */}
        <div className="creator-list">
  {creators.map((c) => (
    <div
      key={c.id}
      className={`creator-card ${
        selectedCreator.id === c.id ? "active" : ""
      }`}
      onClick={() => setSelectedCreator(c)}
    >
      <img src={c.image} alt={c.name} />

      <div className="info">
        <h3>{c.name}</h3>
        <p>{c.category}</p>
      </div>

      <span className="followers">{c.followers}</span>
    </div>
  ))}
</div>

      </div>
    </>
  );
};