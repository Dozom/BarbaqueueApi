export default class LastName {
  constructor(values) {
    this.values = values;
    this.checkType();
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.values !== "string") {
      throw Error("Invalid LastName");
    }
  }
  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field LastName");
    }
  }
  checkMaxLength() {
    if (this.values.length > 50) {
      throw Error("Max Length Reached LastName");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid LastName");
    }
  }
}
