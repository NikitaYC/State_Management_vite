React State Management and useState Hook

-Code 1: Delayed State Update
_The useState hook in React is asynchronous, meaning that when you call setCount, React doesn't immediately update the state.
_To log the updated count value, you can use the useEffect hook to observe changes in the count state.

<!-- import React, { useEffect } from 'react'; -->

<!-- function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]); -->

  -code 2: Multiple State Updates

  _When you call setCount multiple times in the same synchronous block of code, React will batch those updates and only perform a single state update. 
  _If you want to perform multiple updates based on the previous state, you should use the functional form of setCount

  <!-- import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    // Use the functional form to ensure proper incrementation
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    console.log(count); // This will log the correct value
  }; -->
