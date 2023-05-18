export default class Description {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Description");
    }
  }
  checkMaxLength() {
    if (this.values.length > 150) {
      throw Error("Max length Reached Description");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid Description");
    }
  }
}
