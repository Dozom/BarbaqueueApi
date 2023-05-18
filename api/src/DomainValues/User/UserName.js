export default class UserName {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.values === "") {
      throw Error("Invalid Username");
    }
  }
  checkMaxLength() {
    if (this.values.length > 50) {
      throw Error("Max length Reached Username");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid Username");
    }
  }
}
