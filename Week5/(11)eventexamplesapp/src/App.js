import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    alert("Hello! Member1");
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handlePress = (event) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {}
      <p>{count}</p>
      
      {}
      <div style={{ marginBottom: '5px' }}>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div style={{ marginBottom: '5px' }}>
        {}
        <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePress}>Click on me</button>
      </div>

      {}
      <CurrencyConvertor />
      
    </div>
  );
}

export default App;