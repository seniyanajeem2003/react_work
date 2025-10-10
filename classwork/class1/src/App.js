import React from "react";
import Image from "./images/react logo.png"; 
function App() {
  console.log("React app started");

  const userName = "Seniya Najeem"; 

  
  const headingStyle = {
    color: "#007bff",
    fontWeight: "bold",
    fontSize: "28px",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
     <div className="card shadow text-center mx-auto" style={{ width: "30rem", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center"}}>

      
        <h2 style={headingStyle}>Welcome to React Learning, {userName}</h2>
        <hr />

        <img src={Image} alt="Internal React Logo" className="img-fluid mx-auto d-block mb-3" style={{ width: "200px" }} />

        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="External React Icon" className="img-fluid mx-auto d-block mb-3" style={{ width: "200px" }} />

        <p className="text-muted"> This is your first card with images and styles! </p>
      </div>
    </div>
  );
}

export default App;
