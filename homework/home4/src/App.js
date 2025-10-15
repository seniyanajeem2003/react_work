import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      Hello, user! Welcome to our site.
    </div>
  );
};

export default App;
