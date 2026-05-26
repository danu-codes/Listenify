import React from "react";
import "./Trending.css";
import { StoryCard } from "./StoryCard";

const trendingStories = [
  {
    title: "The Haunted Night",
    author: "John Doe",
    image: "https://picsum.photos/300/300?random=1",
    duration: "12 min",
  },
  {
    title: "Love in Paris",
    author: "Emma Smith",
    image: "https://picsum.photos/300/300?random=2",
    duration: "8 min",
  },
  {
    title: "Space Odyssey",
    author: "Alex Ray",
    image: "https://picsum.photos/300/300?random=3",
    duration: "15 min",
  },
  {
    title: "Mind Power",
    author: "David King",
    image: "https://picsum.photos/300/300?random=4",
    duration: "10 min",
  },
  {
    title: "Play Now",
    author: "King John",
    image: "https://picsum.photos/300/300?random=5",
    duration: "20 min",
  },
  {
    title: "Lose Today Win Tomorrow",
    author: "Heisenberg",
    image: "https://picsum.photos/300/300?random=6",
    duration: "60 min",
  },
  {
    title: "Sherlock Homles",
    author: "Newton Einstein",
    image: "https://picsum.photos/300/300?random=7",
    duration: "30 min",
  },
  {
    title: "Never Giveup",
    author: "AK",
    image: "https://picsum.photos/300/300?random=8",
    duration: "120 min",
  },
];

export const Trending = () => {
  return (
    <div className="trending-section">
      <h2>🔥 Trending Stories</h2>

      <div className="trending-scroll">
        {trendingStories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
};