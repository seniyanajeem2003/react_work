import React from "react";
import "./App.css"; 

function App() {
  
  const name = "Seniya Najeem";
  const description = "An Electronics and Communication Engineer / Python Full Stack Developer.";

  
  const profileImage = require("./images/profile.jpg"); 

  
  const externalImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/225px-Python-logo-notext.svg.png";

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="profile-card text-center p-4">
        <img src={profileImage} alt="Profile" className="profile-img mb-3 rounded" width="160" />
        <h2>{name}</h2>
        <p>{description}</p>

        <img src={externalImage} alt="External" className="external-img mt-3 rounded" width="100" />
      </div>
    </div>
  );
}

export default App;
