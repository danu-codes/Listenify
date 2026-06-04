import React from "react";
import "./Trending.css";
import { StoryCard } from "./StoryCard";

const trendingStories = [
  {
    title: "The Haunted Night",
    author: "John Doe",
    image: "https://picsum.photos/300/300?random=1",
    duration: "12 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Love in Paris",
    author: "Emma Smith",
    image: "https://picsum.photos/300/300?random=2",
    duration: "8 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Space Odyssey",
    author: "Alex Ray",
    image: "https://picsum.photos/300/300?random=3",
    duration: "15 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "Mind Power",
    author: "David King",
    image: "https://picsum.photos/300/300?random=4",
    duration: "10 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Play Now",
    author: "King John",
    image: "https://picsum.photos/300/300?random=5",
    duration: "20 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    title: "Lose Today Win Tomorrow",
    author: "Heisenberg",
    image: "https://picsum.photos/300/300?random=6",
    duration: "60 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    title: "Sherlock Homles",
    author: "Newton Einstein",
    image: "https://picsum.photos/300/300?random=7",
    duration: "30 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    title: "Never Giveup",
    author: "AK",
    image: "https://picsum.photos/300/300?random=8",
    duration: "120 min",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
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