export default class Email {
  constructor(Email) {
    this.Email = Email;
    this.checkType();
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.Email !== "string") {
      throw Error("Invalid Email");
    }
  }
  checkEmpty() {
    if (this.Email === "") {
      throw Error("Empty field Email");
    }
  }
  checkMaxLength() {
    if (this.Email.length > 250) {
      throw Error("Max length Reached Email");
    }
  }
  checkInvalidInputs() {
    if (this.Email.includes(",") || this.Email.includes("%")) {
      throw Error("Invalid Email");
    }
  }
}
