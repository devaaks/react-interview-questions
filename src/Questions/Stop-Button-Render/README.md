# StopButtonRender React Component

## Description

The `StopButtonRender` component demonstrates how to prevent unnecessary re-renders of a button component when a state change occurs in a React application. The objective is to ensure that the button does not re-render each time it is clicked, while the counter value updates as expected.

This example contains two child components:

1. **Msg**: Displays the current count.
2. **Button**: Triggers the increment of the count.

By using `React.memo`, the `Button` component is optimized to avoid re-rendering when the state change does not affect its props.

## Usage

The component is a simple counter that increments by 1 each time the button is clicked. The `Msg` component updates to display the new count value, while the `Button` component remains static and does not re-render unnecessarily.

## Code

```javascript
import { useState } from 'react';

function Msg({ count }) {
    return <h1>Count: {count}</h1>;
}

// Using React.memo to prevent unnecessary re-renders of the Button component
const Button = React.memo(({ increment }) => {
    return <button onClick={increment}>Increment</button>;
});

const StopButtonRender = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <Msg count={count} />
            <Button increment={incrementCount} />
        </div>
    );
}

export default StopButtonRender;
