export default class Password {
  constructor(Password) {
    this.Password = Password;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.Email !== "string") {
      throw Error("Invalid Password");
    }
  }
  checkEmpty() {
    if (this.Password === "") {
      throw Error("Empty field Password");
    }
  }
  checkMaxLength() {
    if (this.Password.length > 50) {
      throw Error("Max length Reached Password");
    }
  }
  checkInvalidInputs() {
    if (this.Password.includes(",") || this.Password.includes("%")) {
      throw Error("Invalid Password");
    }
  }
}
