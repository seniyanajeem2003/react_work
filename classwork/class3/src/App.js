import React, { useState } from "react";
import LightSwitch from "./LightSwitch";

const Room = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div
      style={{ backgroundColor: isLightOn ? "yellow" : "grey",
        height: "100vh",
        textAlign: "center",
        paddingTop: "200px"}}>
      <h2>
        The room is {isLightOn ? "bright" : "dark"}
      </h2>
      <LightSwitch isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Room;
