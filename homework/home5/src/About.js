import React from 'react';

function About() {
  const showMessage = () => {
    document.getElementById("aboutMsg").innerHTML = "Hello from React! I love this page!";
    document.getElementById("aboutHeading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="card p-4 mb-4">
      <h3 id="aboutHeading" className="mb-3">This is the About Page</h3>
      <p id="aboutMsg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>Show Enthusiasm</button>
    </div>
  );
}

export default About;
