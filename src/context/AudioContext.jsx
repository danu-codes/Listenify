import React, { createContext, useContext, useState, useRef } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // PLAY NEW STORY
  let isSwitching = false;

  const playAudio = (story) => {
    if (isSwitching) return;
    isSwitching = true;

    const audio = audioRef.current;

    audio.pause();
    audio.src = story.audio;
    audio.load();

    audio.oncanplay = () => {
      audio.play();
      isSwitching = false;
    };
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playAudio,
        pauseAudio,
        togglePlay,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);