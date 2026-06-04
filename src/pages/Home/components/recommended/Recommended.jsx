import React from "react";
import "./Recommended.css";
import { RecommendedCard } from "./RecommendedCard";

const recommendedStories = [
  {
    title: "Midnight Horror Tales",
    author: "John Wick",
    image: "https://picsum.photos/300/300?random=21",
    tag: "Horror",
    reason: "Because you listened to Horror stories",
    duration: "11 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Love in Rain",
    author: "Emma Stone",
    image: "https://picsum.photos/300/300?random=22",
    tag: "Romance",
    reason: "Similar to Romance stories you liked",
    duration: "8 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Space Exploration",
    author: "Alex Ray",
    image: "https://picsum.photos/300/300?random=23",
    tag: "Sci-Fi",
    reason: "Trending in Sci-Fi category",
    duration: "14 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "Daily Motivation Boost",
    author: "Sarah Lee",
    image: "https://picsum.photos/300/300?random=24",
    tag: "Motivation",
    reason: "Recommended for productivity lovers",
    duration: "6 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

export const Recommended = () => {
  return (
    <div className="recommended-section">
      <h2>✨ Recommended for You</h2>

      <div className="recommended-scroll">
        {recommendedStories.map((item, index) => (
          <RecommendedCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};