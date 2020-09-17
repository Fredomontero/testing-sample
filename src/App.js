import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const incrementCounter = () => {
    setCount(count+1);
    if(error)
      setError(false);
  };

  const decrementCounter = () => {
    if(count > 0)
      setCount(count-1);
    else
      setError(true);
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display" >The counter is currently <span data-test="count">{count}</span> </h1>
      <button data-test="increment-button" onClick={incrementCounter}>Increment Counter</button>
      <button data-test="decrement-button" onClick={decrementCounter}>Decrement counter</button>
      {
        error ? (
          <div data-test="error-message">You can't go below 0</div>
        ):(null)
      }
    </div>
  );
}

export default App;
