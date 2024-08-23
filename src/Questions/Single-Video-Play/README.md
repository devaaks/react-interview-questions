# Single Video Play in React

This project demonstrates a simple React component that has multiple video player. When playing one video player it should stop other player.

## Functionality

- The component starts with a black rectangle.
- Clicking the "Generate Single Video Play" button generates a new random hex color code.
- The generated color is displayed as the background color of the rectangle.

## How it Works

The code utilizes React's state management and event handling capabilities:

### State Management

The component utilizes the `useState` hook to manage the current color as a state variable.

### Single Video Play Generation

A dedicated function named `generateRandomColor` generates random hex colors by:

1. Generating a random number between 0 and 16777215, representing the maximum value in a 24-bit RGB color system.
2. Converting the number to a hexadecimal string (base 16).
3. Prepending '#' to create a valid hex color code.

### Display

The generated color is assigned as the background color of a styled `div` element.

### User Interaction

Clicking the button triggers the `generateRandomColor` function, updating the state and subsequently re-rendering the component with the new color.

## Code

```javascript
import React, { useState } from 'react';

function ColorGenerator() {
  const [color, setColor] = useState('#000000'); // Initial color

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div>
      <div style={{ width: '200px', height: '200px', backgroundColor: color }} />
      <button onClick={generateRandomColor}>Generate Single Video Play</button>
    </div>
  );
}

export default ColorGenerator;