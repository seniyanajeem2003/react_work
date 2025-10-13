import React from "react";
import './App.css';

const App = () => {
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  const headingColor = "lightblue";

  const showEnthusiasm = () => {
    document.getElementById("message").innerText = "Hello from React! I love my hobbies!";
    document.getElementById("main-heading").style.backgroundColor = headingColor;
  };

  const hobbyListForLoop = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListForLoop.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }

  return (
    <div className="container mt-4">
      <h1 id="main-heading" className="text-center p-3">MY HOBBIES</h1>

      <div className="card shadow-sm mb-4 mx-auto" style={{width: "18rem", borderRadius: "10px"}}>
        <div className="card-header bg-primary text-white text-center">
          Personal Information
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Student: {isStudent.toString()}</p>
        </div>
      </div>

      <div className="mb-3">
        <h5>Hobbies (for loop)</h5>
        <ul>{hobbyListForLoop}</ul>
      </div>

      <div className="mb-3">
        <h5>Hobbies (map)</h5>
        <ul>{favoriteHobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
      </div>

      <button className="btn btn-primary mb-3" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>

      <p id="message">Click the button to see my enthusiasm!</p>
    </div>
  );
};

export default App;
