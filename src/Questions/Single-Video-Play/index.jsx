import React, { useState } from 'react';
import './Style.css';

const SinglVideoPlay = () => {
  const [color, setColor] = useState('#000000');


  return (
    <div className='container'>
      <div className='rectangle' style={{ backgroundColor: color }} />
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
}

export default SinglVideoPlay;


/*

*/