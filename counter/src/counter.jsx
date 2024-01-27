import React, { useState} from "react";


export function Counter() {
    // Your code here
    const [count, setCount] = useState(1)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  return (
    <>
    <h2>count : {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
      
    </>
  )
}
