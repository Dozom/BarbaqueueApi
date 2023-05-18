export default class PhoneNumber {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.values !== "string") {
      throw Error("Invalid Phone Number");
    }
  }
  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Phone Number");
    }
  }
  checkMaxLength() {
    if (this.values.length > 50) {
      throw Error("Max length Reached Phone Number");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid Phone Number");
    }
  }
}
