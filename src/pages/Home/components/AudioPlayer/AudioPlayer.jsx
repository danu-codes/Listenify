import React from "react";
import "./AudioPlayer.css";
import { useAudio } from "../../../../context/AudioContext";
export const AudioPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seekAudio,
  } = useAudio();

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">

      {/* INFO */}
      <div className="audio-info">
        <h4>{currentTrack ? currentTrack.title : "No track selected"}</h4>
        <p>{currentTrack ? currentTrack.author : "Click a story"}</p>
      </div>

      {/* CONTROLS */}
      <div className="audio-controls">

        <button onClick={togglePlay} disabled={!currentTrack}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* PROGRESS BAR */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress || 0}
          onChange={(e) =>
            seekAudio((e.target.value / 100) * duration)
          }
        />

        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

      </div>
    </div>
  );
};