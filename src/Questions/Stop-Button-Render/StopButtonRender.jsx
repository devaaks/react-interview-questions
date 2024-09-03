import { useState} from 'react';

function Msg({ count }) {
    return <h1>Count: {count}</h1>;
}

function Button({ increment }) {
    return <button onClick={increment}>Increment</button>;
}
  
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
  