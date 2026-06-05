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
    seekAudio
  } = useAudio();

  if (!currentTrack) return null;

  // ⏱ format time
  const formatTime = (t) => {
    if (!t) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">

      {/* INFO */}
      <div className="audio-info">
        <h4>{currentTrack.title}</h4>
        <p>{currentTrack.author}</p>
      </div>

      {/* CONTROLS */}
      <div className="audio-controls">

        {/* PLAY / PAUSE */}
        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* SEEK BAR */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress || 0}
          onChange={(e) =>
            seekAudio((e.target.value / 100) * duration)
          }
        />

        {/* TIME */}
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

      </div>

    </div>
  );
};