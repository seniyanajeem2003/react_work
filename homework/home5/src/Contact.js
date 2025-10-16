import React from 'react';

function Contact() {
  const showMessage = () => {
    document.getElementById("contactMsg").innerHTML = "Hello from React! I love this page!";
    document.getElementById("contactHeading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="card p-4 mb-4">
      <h3 id="contactHeading" className="mb-3">This is the Contact Page</h3>
      <p id="contactMsg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showMessage}>Show Enthusiasm</button>
    </div>
  );
}

export default Contact;
