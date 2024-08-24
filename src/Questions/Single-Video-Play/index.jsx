import React, { useState } from 'react';
import './Style.css';

const SinglVideoPlay = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const playVideo = () => {
    // TBD
  }

  return (
    <div className='container'>
      <video width="320" height="240" controls>
        <source src="https://www.youtube.com/watch?v=ZhIaDiFIbGc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="480" controls>
        <source src="https://www.youtube.com/watch?v=ZhIaDiFIbGc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SinglVideoPlay;


/*

*/