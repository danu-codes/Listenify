import React from "react";
import "./Creators.css";
import { CreatorCard } from "./CreatorCard";

const creators = [
  {
    name: "John Wick",
    bio: "Horror storyteller",
    image: "https://i.pravatar.cc/150?img=12",
    followers: "12K",
  },
  {
    name: "Emma Stone",
    bio: "Romance narrator",
    image: "https://i.pravatar.cc/150?img=32",
    followers: "8.5K",
  },
  {
    name: "Alex Ray",
    bio: "Sci-Fi creator",
    image: "https://i.pravatar.cc/150?img=45",
    followers: "20K",
  },
  {
    name: "Sarah Lee",
    bio: "Motivation speaker",
    image: "https://i.pravatar.cc/150?img=5",
    followers: "15K",
  },
  {
    name: "Steve Rogers",
    bio: "Motivation speaker",
    image: "https://i.pravatar.cc/150?img=6",
    followers: "2M",
  },
  {
    name: "Jackie chan",
    bio: "Art",
    image: "https://i.pravatar.cc/150?img=7",
    followers: "1M",
  },
];

export const Creators = () => {
  return (
    <div className="creators-section">
      <h2>⭐ Featured Creators</h2>

      <div className="creators-scroll">
        {creators.map((creator, index) => (
          <CreatorCard key={index} {...creator} />
        ))}
      </div>
    </div>
  );
};