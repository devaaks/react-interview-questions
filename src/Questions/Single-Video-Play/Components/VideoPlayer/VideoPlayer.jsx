import React, { useState, useRef } from 'react';
import './styles.css';

const VideoPlayer = ({ isActivePlayer=false, onPlayCallback, src= 'public/sample.mp4', width = '320', height = '240' }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
    onPlayCallback?.();
  };

  const handlePause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!isActivePlayer && isPlaying) {
      playerRef.current.pause();
    }
  }, [isPlaying, isActivePlayer]);

  return (
    <video ref={playerRef} onPause={handlePause} onPlay={handlePlay} width={width} height={height} controls>
        <source src="public/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
