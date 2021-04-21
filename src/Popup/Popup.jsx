import React from "react";
import "./Popup.css";

class Popup extends React.Component {
  render() {
    return (
      <div id="popup" onClick={clicPopup}>
        <div id="popup-form">
          <h1>Welcome!</h1>

          <label>First name:</label>
          <input type="text" id="fname"></input>
          <label>Last name:</label>
          <input type="text" id="lanme"></input>
          <label>Mail address:</label>
          <input type="text" id="mail"></input>

          <label>Password:</label>
          <input type="password" id="password"></input>
          <label>Birth day:</label>
          <input type="date" id="b-day"></input>

          <button>Sign in</button>
        </div>
      </div>
    );
  }
}

function clicPopup(e) {
  if (e.target.id === "popup")
    document.getElementById("popup").style.display = "none";
}

export default Popup;
