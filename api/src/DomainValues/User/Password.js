export default class Password {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.values !== "string") {
      throw Error("Invalid Password");
    }
  }
  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Password");
    }
  }
  checkMaxLength() {
    if (this.values.length > 50) {
      throw Error("Max length Reached Password");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid Password");
    }
  }
}
