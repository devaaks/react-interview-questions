import React, { useState } from 'react';
import './Style.css';

// 16777215 represents the maximum value in a 24-bit RGB color system.
const MAX_RGB_VALUE = 16777215;

const ColorGenerator = () => {
  const [color, setColor] = useState('#000000');

  const generateRandomColor = () => {
    // toString(16): Converts the number to a hexadecimal string (base 16 -  hex color codes format)
    const randomColor = '#' + Math.floor(Math.random() * MAX_RGB_VALUE).toString(16);
    setColor(randomColor);
  };

  return (
    <div className='container'>
      <div className='rectangle' style={{ backgroundColor: color }} />
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
}

export default ColorGenerator;


/*
Explanation - 

Breakdown of 16777215:
> 24-bit color: This means we have 24 bits to represent a color.   
> RGB: Red, Green, and Blue are the primary colors used.  
> Each color channel: Has 8 bits, which can represent values from 0 to 255.
    
    So, the total number of possible color combinations is:
    
    256 (red) * 256 (green) * 256 (blue) = 16,777,216

we start counting from 0, so the maximum value we can generate is 16,777,215.

*/