export default class Email {
  constructor(values) {
    this.values = values;
    this.checkType();
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.values !== "string") {
      throw Error("Invalid Email");
    }
  }
  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Email");
    }
  }
  checkMaxLength() {
    if (this.values.length > 250) {
      throw Error("Max length Reached Email");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid Email");
    }
  }
}
