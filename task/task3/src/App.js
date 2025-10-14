import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleIncrementClick = () => {
    if (!isLocked){
      setCount(count + 1);
  }};
  const handleDecrementClick =() => {
    if (!isLocked){
      setCount(count - 1);
  }};
  const handleResetClick =()=>{
    if (!isLocked){
      setCount(0);
  }};
  const handleLockClick =()=>{
    setIsLocked(!isLocked);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrementClick}>+ Increase</button>{"       "}
      <button onClick={handleDecrementClick}>- Decrease</button><br />
      <button onClick={handleResetClick}>Reset</button>{"  "}
      <button onClick={handleLockClick}>Lock</button><br />

    </div>
  );
}

export default App;