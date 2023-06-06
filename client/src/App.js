import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchCounter();
  }, []);

  const fetchCounter = async () => {
    try {
      const response = await axios.get('/api/counter');
      setCounter(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementCounter = async () => {
    try {
      const response = await axios.post('/api/counter/increment');
      setCounter(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const decrementCounter = async () => {
    try {
      const response = await axios.post('/api/counter/decrement');
      setCounter(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default App;
