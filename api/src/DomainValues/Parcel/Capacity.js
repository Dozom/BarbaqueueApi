export default class Capacity {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.values === 0) {
      throw Error("Not allowed for 0 people");
    }
  }
  checkMaxLength() {
    if (this.values > 100) {
      throw Error("Not allowed for more than 100 Persons");
    }
  }
  checkInvalidInputs() {
    if (typeof this.values === "string") {
      throw Error("Invalid Capacity");
    }
  }
}
