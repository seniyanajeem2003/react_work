import React from 'react';

function Home() {
  const showMessage = () => {
    document.getElementById("homeMsg").innerHTML = "Hello from React! I love this page!";
    document.getElementById("homeHeading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="card p-4 mb-4">
      <h3 id="homeHeading" className="mb-3">This is the Home Page</h3>
      <p id="homeMsg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>Show Enthusiasm</button>
    </div>
  );
}

export default Home;
