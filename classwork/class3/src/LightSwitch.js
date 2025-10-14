import React from "react";

const LightSwitch = ({ isLightOn, toggleLight }) => {
  return (
    <button onClick={toggleLight} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
      {isLightOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
};

export default LightSwitch;
