import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playAudio = (story) => {
    const audio = audioRef.current;

    if (currentTrack?.audio !== story.audio) {
      audio.src = story.audio;
      setCurrentTrack(story);
    }

    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!currentTrack) return;

    if (isPlaying) {
      pauseAudio();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // 🔥 LIVE LISTENERS
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioData);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioData);
    };
  }, []);

  // 🔥 SEEK FUNCTION
  const seekAudio = (time) => {
    audioRef.current.currentTime = time;
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playAudio,
        pauseAudio,
        togglePlay,
        currentTime,
        duration,
        seekAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);