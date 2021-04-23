import React from "react";
import "./Popup.css";
import { chekFieldsPopup, clicPopup } from "./utils.js";

class Popup extends React.Component {
  state = {
    name: "",
    lname: "",
    mail: "",
    password: "",
    b_day: "",
  };

  writeState = () => {
    const [isAllCorrect, AllFields] = chekFieldsPopup();

    if (isAllCorrect) {
      this.setState(AllFields);
    }
  };

  render() {
    return (
      <div id="popup" onClick={clicPopup}>
        <div id="popup-form">
          <h1>Beer club</h1>

          <label>First name:</label>
          <input type="text" id="name"></input>
          <label>Last name:</label>
          <input type="text" id="lname"></input>
          <label>Mail address:</label>
          <input type="text" id="mail"></input>

          <label>Password:</label>
          <input type="password" id="password"></input>
          <label>Birth day:</label>
          <input type="date" id="b_day"></input>

          <button onClick={this.writeState}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default Popup;
