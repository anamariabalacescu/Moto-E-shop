import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ src, volume }) => {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.volume = volume; // Set the volume
    const playAudio = () => {
      audio.play().catch(error => {
        console.error('Autoplay prevented:', error.message);
      });
    };
    document.addEventListener('click', playAudio); 
    return () => {
      document.removeEventListener('click', playAudio); 
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, volume]);

  return null; 
};

export default AudioPlayer;
