import React, { useState, useRef } from 'react';
import './Style.css';

const SinglVideoPlay = () => {
  const [currentVideoResolution, setCurrentVideoResolution] = useState(null);
  const smallVideRef = useRef(null);
  const largeVideRef = useRef(null);

  const playVideo = (resolution) => {
  
    if (currentVideoResolution) { // initial video play check 
      // #1. if big video is playing then stop it
      if (currentVideoResolution === '640x480') {
        largeVideRef.current.pause();
      }
      // #2. if small video is playing then stop it
      if (currentVideoResolution === '320x240') {
        smallVideRef.current.pause();
      }
    }
    setCurrentVideoResolution(resolution);
  }

  return (
    <div className='container'>
      <video onPlay={() => playVideo('320x240')} width="320" height="240" controls ref={smallVideRef}>
        <source src="public/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video onPlay={() => playVideo('640x480')} width="640" height="480" controls ref={largeVideRef}>
        <source src="public/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SinglVideoPlay;


/*

*/