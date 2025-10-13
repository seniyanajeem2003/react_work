import React, { useState } from "react";

function FavoriteFoods() {
  const [message, setMessage] = useState("Select a food that you love!");
  const foods = ["Pizza", "Burger", "Ice Cream", "Mandi", "Biriyani"];

  return (
    <div>
      <h3>Favorite Foods</h3>
      <ul>
        {foods.map((food) => (
          <li key={food} style={{ marginBottom: "10px" }}>
            {food}{" "}
            <button onClick={() => setMessage("I love " + food + "!")}>
              Click Me
            </button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
}

export default FavoriteFoods;
