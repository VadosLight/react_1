function clicPopup(e) {
  if (e.target.id === "popup")
    document.getElementById("popup").style.display = "none";
}

function chekFieldsPopup() {
  return [Validator.isAllCorrect(), Validator.correctField];
}

class Validator {
  static correctField = {};

  static isAllCorrect() {
    let allCorrect = true;

    if (!this.isValidName()) {
      allCorrect = false;
    }

    if (!this.isValidLastName()) {
      allCorrect = false;
    }

    if (!this.isValidEmail()) {
      allCorrect = false;
    }

    if (!this.isValidPassword()) {
      allCorrect = false;
    }

    if (!this.isValidBirthDate()) {
      allCorrect = false;
    }

    if (allCorrect) {
      document.getElementById("popup").style.display = "none";
    }
    return allCorrect;
  }

  static isValidEmail = () => {
    const mail = document.getElementById("mail");

    const regEmail = new RegExp(
      String.raw`^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$`
    );

    const isValid = regEmail.test(mail.value);
    isValid ? this.testPassed(mail) : this.showError(mail);

    return isValid;
  };

  static isValidPassword = () => {
    const password = document.getElementById("password");

    const isValid = password.value.length >= 6;
    isValid ? this.testPassed(password) : this.showError(password);

    return isValid;
  };

  static isValidName = () => {
    const name = document.getElementById("name");
    const regName = new RegExp(
      String.raw`^(?=.*?[A-Za-z])[A-Za-z+]+$|^(?=.*?[а-яА-Я+])[А-Яа-я+]+$`
    );

    const isValid = regName.test(name.value);
    isValid ? this.testPassed(name) : this.showError(name);

    return isValid;
  };

  static isValidLastName = () => {
    const lname = document.getElementById("lname");
    const regName = new RegExp(
      String.raw`^(?=.*?[A-Za-z])[A-Za-z+]+$|^(?=.*?[а-яА-Я+])[А-Яа-я+]+$`
    );

    const isValid = regName.test(lname.value);
    isValid ? this.testPassed(lname) : this.showError(lname);

    return isValid;
  };

  static isValidBirthDate = () => {
    const b_day = document.getElementById("b_day");

    const isValid = !!b_day.value;
    isValid ? this.testPassed(b_day) : this.showError(b_day);
    return isValid;
  };

  static showError(elem) {
    elem.style.borderColor = "red";
  }

  static testPassed = (elem) => {
    this.correctField[elem.id] = elem.value;
    elem.style.borderColor = "blanchedalmond";
  };
}

export { clicPopup, chekFieldsPopup };
