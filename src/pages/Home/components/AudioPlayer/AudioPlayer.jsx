import React, { useState, useRef } from "react";
import "./AudioPlayer.css";

export const AudioPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const duration = audioRef.current.duration;
    const current = audioRef.current.currentTime;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime =
      (value / 100) * audioRef.current.duration;
    setProgress(value);
  };

  return (
    <div className="audio-player">
      {/* AUDIO FILE (temporary demo) */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={handleTimeUpdate}
      />

      {/* LEFT INFO */}
      <div className="audio-info">
        <h4>Now Playing</h4>
        <p>Red Dead Redemption</p>
      </div>

      {/* CONTROLS */}
      <div className="audio-controls">
        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <input
          type="range"
          value={progress}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};