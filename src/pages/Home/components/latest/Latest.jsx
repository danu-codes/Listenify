import React from 'react'
import "./Latest.css";
import { LatestCard } from "./LatestCard";

const latestStories = [
    {
        title: "Dark Forest Mystery",
        author: "John Wick",
        image: "https://picsum.photos/300/300?random=10",
        duration: "9 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
        title: "Morning Motivation",
        author: "Sarah Lee",
        image: "https://picsum.photos/300/300?random=11",
        duration: "6 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
        title: "Alien Contact",
        author: "Alex Ray",
        image: "https://picsum.photos/300/300?random=12",
        duration: "14 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
        title: "Kids Bedtime Story",
        author: "Emma Stone",
        image: "https://picsum.photos/300/300?random=13",
        duration: "5 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
        title: "The Boys",
        author: "Home Lander",
        image: "https://picsum.photos/300/300?random=14",
        duration: "300 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        image: "https://picsum.photos/300/300?random=15",
        duration: "500 min",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
];

export const Latest = () => {
    return (
        <div className="latest-section">
            <h2>🆕 Latest Uploads</h2>
            <div className="latest-grid">{latestStories.map((item, index)=>(
                <LatestCard key={index}{...item} />
                ))}</div>
            
        </div>
    )
}
