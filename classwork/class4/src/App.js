import React, { useState, useEffect } from "react";

const ProfileViewer = () => {
  const [user, setUser] = useState("Guest");
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (user === "Alice") {
      console.log("User changed to Alice");
    }
  }, [user]);

  const handleLogin = () => {
    setUser("Alice");
    setShowButton(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <p>Welcome, {user}!</p>
      {showButton && <button onClick={handleLogin}>Login as Alice</button>}
    </div>
  );
};

export default ProfileViewer;
