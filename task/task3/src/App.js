import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [colour, setColour] = useState();

  const handleIncrementClick = () => {
    if (!isLocked){
      setCount(count + 1);

      if (count + 1 >= 10){
      setColour('yellow');}
      else{ setColour();}
  }};

  const handleDecrementClick =() => {
    if (!isLocked){
      setCount(count - 1);

      if (count - 1 >= 10){
      setColour('yellow');}
      else{ setColour();}
  }};

  const handleResetClick =()=>{
    if (!isLocked){
      setCount(0);
      setColour();
  }};

  const handleLockClick =()=>{
    setIsLocked(!isLocked);
  }

  return (
    <div style={{ textAlign: "center" ,backgroundColor: colour, height: "100vh", fontSize: "24px",transition: "background-color 0.3s ease",}}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrementClick}>+ Increase</button>{"       "}
      <button onClick={handleDecrementClick}>- Decrease</button><br />
      <button onClick={handleResetClick}>Reset</button>{"  "}
      <button onClick={handleLockClick}> {isLocked ? "Unlock" : "Lock"}</button><br />

    </div>
  );
}

export default App;