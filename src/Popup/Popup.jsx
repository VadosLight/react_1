import React from "react";
import "./Popup.css";

class Popup extends React.Component {
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

          <button onClick={chekFieldsPopup}>Sign in</button>
        </div>
      </div>
    );
  }
}

function clicPopup(e) {
  if (e.target.id === "popup")
    document.getElementById("popup").style.display = "none";
}

function chekFieldsPopup() {
  const name = document.getElementById("name");
  const lname = document.getElementById("lname");
  const mail = document.getElementById("mail");
  const password = document.getElementById("password");
  const b_day = document.getElementById("b_day");
  let allCorrect = true;

  if (!Validator.isValidName(name.value)) {
    allCorrect = false;
    name.style.borderColor = "red";
  } else {
    name.style.borderColor = "blanchedalmond";
  }

  if (!Validator.isValidLastName(lname.value)) {
    allCorrect = false;
    lname.style.borderColor = "red";
  } else {
    lname.style.borderColor = "blanchedalmond";
  }

  if (!Validator.isValidEmail(mail.value)) {
    allCorrect = false;
    mail.style.borderColor = "red";
  } else {
    mail.style.borderColor = "blanchedalmond";
  }

  if (!Validator.isValidPassword(password.value)) {
    allCorrect = false;
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "blanchedalmond";
  }

  console.log(b_day);
  console.log(b_day.value);
  if (!Validator.isValidBirthDate(b_day.value)) {
    allCorrect = false;
    b_day.style.borderColor = "red";
  } else {
    b_day.style.borderColor = "blanchedalmond";
  }

  if (allCorrect) {
    document.getElementById("popup").style.display = "none";
  }
}

class Validator {
  static isValidEmail(email) {
    const regEmail = new RegExp(
      String.raw`^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$`
    );
    return regEmail.test(email);
  }

  static isValidPassword(password) {
    return password.length >= 6;
  }

  static isValidName(name) {
    const regName = new RegExp(
      String.raw`^(?=.*?[A-Za-z])[A-Za-z+]+$|^(?=.*?[а-яА-Я+])[А-Яа-я+]+$`
    );
    return regName.test(name);
  }

  static isValidLastName(lname) {
    const regName = new RegExp(
      String.raw`^(?=.*?[A-Za-z])[A-Za-z+]+$|^(?=.*?[а-яА-Я+])[А-Яа-я+]+$`
    );
    return regName.test(lname);
  }

  static isValidBirthDate(date) {
    return !!date;
  }
}

export default Popup;
